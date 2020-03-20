<?php

namespace App\Http\Controllers;

use App\Task;
use App\User;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return Task::where('user_id', '7')->orderBy('created_at')->get();


    }
}
