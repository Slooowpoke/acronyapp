<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Industry extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('industries', function (Blueprint $table) {
        	$table->increments('id');
			$table->integer('acronym_id')->unsigned();
			$table->foreign('acronym_id')->references('id')->on('acronyms');
        	$table->string('name');
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
        //
    }
}
