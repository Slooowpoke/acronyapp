<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return $app->version();
});

$app->group(['prefix' => 'api/v1'], function($app)
{
	$app->get('acronym/search','AcronymController@popular');
	$app->get('acronym/search/{terms}/context/{context}','AcronymController@search');
	$app->post('acronym/save','AcronymController@store');
	$app->get('acronym/{id}','AcronymController@fetch');

	$app->get('industry/search/{terms}','IndustryController@search');
	$app->get('industry/save','IndustryController@store');


	$app->get('feedback',function($app){
		// the closure for the e-mail
	});

});
