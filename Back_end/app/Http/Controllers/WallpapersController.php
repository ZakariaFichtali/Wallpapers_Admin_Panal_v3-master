<?php

namespace App\Http\Controllers;

use App\Models\wallpapers;
use Illuminate\Http\Request;
use stdClass;

class WallpapersController extends Controller
{
    //
    public function index(){
        $wall = wallpapers::all();
            return response()->json(["data"=>$wall]);
        // $wallObject = $wall->mapWithKeys(function($wall){
            // return [$wall->id=>$wall];
        // });
        // $responseToObject=new stdClass();
        // $responseToObject->data=$wallObject;
        // return response()->json($responseToObject);

        // $walltoArray = $wall->toArray();
        // $responseToObject=new stdClass();
        // $responseToObject->data=(object)$walltoArray;
        // return response()->json($responseToObject);

        // $toArray = $wall->toArray();
        // $toObject=(object)array_values($toArray);
        // $res = new stdClass();
        // $res->data = $toObject;

        // $collect = collect($wall);
        // $dataOfObj = $collect->values();
        // foreach($dataOfObj as $obj){
        //     return response()->json($obj);
        // }

    }

    public function addWallpaper(Request  $request){
        $wall = new wallpapers();
        $wall->name = $request->name;
        $wall->locked = $request->locked;
        $wall->card_id = $request->cards_id;
        $wall->image = $request->image;
        $wall->save();
    }







    public function UpdateWallpaper(Request  $request , $id){
        $wall = wallpapers::find($id);
        $wall->name = $request->name;
        $wall->locked = $request->locked;
        $wall->card_id = $request->card_id;
        $wall->image = $request->image;
        $wall->save();
    }





    public function destroy($id)
    {
        $wall = wallpapers::find($id);
        $wall->delete();
    }
}
