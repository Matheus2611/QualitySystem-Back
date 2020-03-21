<?php

namespace App\Http\Controllers;

use App\Project;
use App\Cicle;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Project::with('cicle')->get();

        // retorna os projetos com os usuários
        // return Project::with('users')->get();
    }

    public function userProject()
    {
        return Project::where('user_id', auth()->user()->id)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $data = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'status' => 'required|string',
        ]);

        $p = new Project([
            'title' => $data['title'],
            'description' => $data['description'],
            'status' => 'Em Andamento'
          ]);


        $p->save();

        $cicle = new Cicle(['completed' => false]);

        $p->cicle()->save($cicle);

    //      usar quando precisar vincular um projeto ou alguma coisa ao usuário logado
    //      $project = Project::create([
    //     'user_id' => auth()->user()->id,
    //     'title' => $request->title,
    //     'description' => $request->description,
    //     'completed' => $request->completed,
    //     'status' => $request->status,
    //    ])

       return response($p->cicle, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        // só o usuário logado pode dar update, usar isso depois para editar os fluxos
        // if($project->user_id !== auth()->user()->id)
        // {
        //     return response()->json('Unauthorized', 401);
        // }

      $data = $request->validate([
        'title' => 'required|string',
        'description' => 'required|string',
        'completed' => 'required|boolean',
        'status' => 'required|string',

        ]);

        $project->update($data);


        return response($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
       $project->delete();

       return response($project, 200);
    }


    public function destroyCompleted(Request $request)
    {
        //função para excluir um array de projetos ou qualquer coisa
        //verifica se o array que foi passado contem no array de projetos/item do usuário logado

        $projectsToDelete = $request->projects;

        $userProjectIds = auth()->user()->projects->map(function ($project) {
            return $project->id;
        });

        $valid = collect($projectsToDelete)->every(function ($value, $key) use ($userProjectIds) {
            return $userProjectIds->contains($value);
        });

        if (!$valid) {
            return response()->json('Unauthorized', 401);
        }

        $request->validate([
            'projects' => 'required|array',
        ]);

        Project::destroy($request->projects);

        return response()->json('Deleted', 200);
    }
}
