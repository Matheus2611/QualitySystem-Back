<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flow extends Model
{
    protected $fillable = ['cicle_id', 'title', 'status'];

    public function tasks()
    {
        return $this->hasMany('App\Task');
    }

    public function cicle()
    {
        return $this->belongsTo('App\Cicle');
    }



}


