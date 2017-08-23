<?php

namespace App\Http\Controllers;

use App\Industry;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndustryController extends Controller{

	/**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

	public function search(Request $request, $terms){
		$industries = Industry::all();

		return $industries;
	}

	public function store(Request $request){

		// Validate industry input
		$this->validate($request, [
		   'name' => 'required|string|max:255',
	   ]);

		// Create the industry taxonomy
    	$industry = Industry::create($request->all());

    	return response()->json($industry);
	}


	public function destroy($id){
		// Needs special auth
    	$industry  = Industry::find($id);
    	$industry->delete();

    	return response()->json('Deleted.');
	}

	public function fetch(Request $request,$id){
		$industry  = Industry::find($id);
		return response()->json($industry);
	}
}
