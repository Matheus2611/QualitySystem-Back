<?php

namespace App\Http\Controllers;

use App\Flow;
use App\Task;
use App\Cicle;
use Illuminate\Http\Request;

class FlowController extends Controller
{
    public function index()
    {
        // return Flow::with('cicle')->with('tasks')->->get();

        $flows = Flow::with('tasks')->get();



            return response($flows);


    }

    public function store(Request $request)
    {

        $flow = $request->all();

        $res = [];

        foreach($flow['fluxos'] as $data)
        {
            $f = new Flow([
                'title' => $data['tituloFluxo'],
                'status' => 'Em Andamento',
                'cicle_id' => $flow['cicle_id']['id']
              ]);


             $f->save();

             $f->tasks()->createMany($data['testes']);


             $res[] = $f;
        }



    //    $data = $request->validate([
    //         'title' => 'required|string',
    //         'status' => 'required|string',
    //         // 'ciclo_id' => 'required|integer'
    //     ]);

    //    $flow = Flow::create($data);

      return response($res, 201);
    }

}
