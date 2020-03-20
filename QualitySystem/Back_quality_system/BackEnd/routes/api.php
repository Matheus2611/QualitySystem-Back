<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/flows', 'FlowController@store');
    Route::post('/tasks', 'TaskController@store');
    Route::get('/userProject', 'ProjectController@userProject');
    Route::post('/logout', 'AuthController@logout');
    Route::put('/updateAuthUserPassword','AuthController@updateAuthUserPassword');
});


Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');

Route::get('/users', 'UserController@index');
Route::patch('/update/{user}', 'AuthController@update');
Route::delete('/users/{user}', 'AuthController@destroy');

Route::get('/projects', 'ProjectController@index');
Route::post('/projects', 'ProjectController@store');
Route::patch('/projects/{project}', 'ProjectController@update');
Route::delete('/projects/{project}', 'ProjectController@destroy');

Route::get('/flows', 'FlowController@index');
Route::get('/tasks', 'TaskController@index');


//querys
Route::get('/userstasks', 'TaskController@index');
Route::get('/userstask', 'UserController@UserTasks');
Route::get('/projectsCicle', 'CicleController@index');


