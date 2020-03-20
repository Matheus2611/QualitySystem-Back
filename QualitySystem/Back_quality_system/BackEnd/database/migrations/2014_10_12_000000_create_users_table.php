<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('perfil');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }





      /**
     * Exemplo de tabela many to many
     *
     *  Schema::create('projects_users', function( $table ){
    *       $table->integer('projects_id')->unsigned();
    *       $table->foreign('projects_id')->references('id')->on('projects');
     *      $table->integer('users_id')->unsigned();
     *      $table->foreign('users_id')->references('id')->on('users');
    *   });
     */


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
