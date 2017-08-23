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
		Schema::create('acronym_industry', function (Blueprint $table) {

            $table->integer('acronym_id')->unsigned()->nullable();
            $table->foreign('acronym_id')->references('id')->on('acronyms')->onDelete('cascade');;
			$table->integer('industry_id')->unsigned()->nullable();
			$table->foreign('industry_id')->references('id')->on('industries')->onDelete('cascade');;
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
