<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AcronymIndustry extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('acronyms_industry', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('industry_id')->unsigned();
            $table->foreign('industry_id')->references('id')->on('industry');
            $table->integer('acronym_id')->unsigned();
            $table->foreign('acronym_id')->references('id')->on('acronms');
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
