<?php

namespace App\Http\Controllers;

use Validator;
use App\Acronym;
use App\Industry;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AcronymController extends Controller{

	/**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

	public function search(Request $request, $terms,$context){
		$acronyms  = Acronym::all();


    	return response()->json(["terms" => $terms, "context" => $context]);
	}

	public function popular(Request $request){
		$acronyms  = Acronym::all();

    	return response()->json($acronyms);
	}

	public function store(Request $request){

		// Validate the acronym before saving it
		$validator = Validator::make($request->all(), [
		   'acronym' => 'required|string|max:255',
		   'meaning' => 'required|string|max:255',
		   'description' => 'required|string|max:512',
		   'industry[*]name' => 'required|string|max:255',
		]);

		$meaning = $request->input('meaning');
		$description = $request->input('description');

		// Check to see if the same acronym and meaning exist
		$results = app('db')->select("SELECT * FROM `acronyms` WHERE `meaning` = '$meaning' AND `description` = '$description'");

		if(count($results) >= 1){
	    	$validator->errors()->add('Acronym', "Already exists");
		}

		if(count($validator->errors()) > 0) {
			return response()->json(['errors' => $validator->errors()], 422);
        }

		// Create the acronym
		$acronym = Acronym::create([
            'acronym' => $request->input('acronym'),
            'meaning' => $request->input('meaning'),
            'description' => $request->input('description'),
            'popularity' => 0,
			'safe' => 0,
        ]);


		$industries = $request->input('industries');

		$industryModels = collect([]);

		foreach($industries as $industryName){

			// Check each of these industries to see if the exist in our database already.
			$result = Industry::where('name',$industryName)->first();

			if(!$result){
				// Create the industry
				$industryModel = Industry::create(['name' => $industryName]);
			}else{
				// If we do find a result, set our model to be it
				$industryModel = $result;
			}

			// Now sync the Acronym to the industies
			$industryModel->acronyms()->sync([$acronym->id], false);

			$industryModels->push($industryModel);
		}
		die();
    	return response()->json(['acronym' => $acronym,'industries' => $industryModels]);
	}

	public function fetch(Request $request,$id){
		$acronym  = Acronym::find($id);
		return response()->json($acronym);
	}

	public function destroy($id){
    	$acronym  = Acronym::find($id);
    	$acronym->delete();

    	return response()->json('Deleted.');
	}
}
