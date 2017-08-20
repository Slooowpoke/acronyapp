<?php

namespace App\Http\Controllers;

use App\Acronym;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AcronymController extends Controller{

	/**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

	public function store(Request $request){

    	$acronym = Acronym::create($request->all());

    	return response()->json($acronym);
	}

	public function update(Request $request, $id){

    	$acronym  = Acronym::find($id);
    	$acronym->acronym = $request->input('acronym');
    	$acronym->description = $request->input('description');
    	$acronym->popularity = $request->input('popularity');
    	$acronym->save();

    	return response()->json($acronym);
	}

	public function destroy($id){
    	$acronym  = Acronym::find($id);
    	$acronym->delete();

    	return response()->json('Deleted.');
	}

	public function index(){
    	$acronyms  = Acronym::all();

    	return response()->json($acronyms);
	}

	public function fetch(Request $request,$id){
		$acronym  = Acronym::find($id);
		return response()->json($acronym);
	}
}
