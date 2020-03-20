<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['user_id', 'flow_id', 'title', 'comentary', 'status'];

    public function flow()
    {
        return $this->belongsTo('App\Flow');
    }

    public function user()
    {
        return $this->hasMany('App\User');

    }

}
