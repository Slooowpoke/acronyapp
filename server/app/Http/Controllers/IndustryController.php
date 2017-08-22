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

	public function store(Request $request){

    	$industry = Industry::create($request->all());

    	return response()->json($acronym);
	}

	public function update(Request $request, $id){

    	$industry  = Industry::find($id);
    	$industry->name = $request->input('name');
    	$industry->save();

    	return response()->json($industry);
	}

	public function destroy($id){
    	$industry  = Industry::find($id);
    	$industry->delete();

    	return response()->json('Deleted.');
	}

	public function index(){
    	$industries  = Industry::all();

    	return response()->json($industries);
	}

	public function fetch(Request $request,$id){
		$industry  = Industry::find($id);
		return response()->json($industry);
	}
}
