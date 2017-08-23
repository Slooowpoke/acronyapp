<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Acronyms extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('acronyms', function (Blueprint $table) {
        	$table->increments('id');
        	$table->string('acronym');
			$table->string('meaning');
        	$table->string('description');
        	$table->integer('popularity');
			$table->boolean('safe');
			$table->timestamps();
    	});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('acronyms');
    }
}
