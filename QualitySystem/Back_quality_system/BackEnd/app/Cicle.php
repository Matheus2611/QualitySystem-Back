<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cicle extends Model
{
    protected $fillable = ['project_id', 'completed'];

    public function project()
    {
        return $this->belongsTo('App\Project');
    }

    public function flow()
    {
        return $this->hasMany('App\Flow');
    }

}

