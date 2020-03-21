<?php

namespace App\Http\Controllers;

use App\Task;
use App\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
       return Task::with('flow')->where('user_id', auth()->user()->id)->get();

    }
}
