<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['title', 'description', 'status'];

    public function cicle()
    {
        return $this->hasOne('App\Cicle');
    }


}
