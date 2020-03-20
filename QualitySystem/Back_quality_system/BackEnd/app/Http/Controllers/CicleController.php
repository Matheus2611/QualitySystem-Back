<?php

namespace App\Http\Controllers;

use App\Cicle;
use Illuminate\Http\Request;

class CicleController extends Controller
{
    public function index()
    {
        return Cicle::with('project')->orderBy('created_at', 'desc')->get();

    }

    public function store(Request $request)
    {

       $data = $request->validate([
            'project_id' => 'required|integer',
            'completed' => 'required|boolean'
        ]);

       $cicle = Cicle::create($data);

       return response($cicle, 201);
    }
}
