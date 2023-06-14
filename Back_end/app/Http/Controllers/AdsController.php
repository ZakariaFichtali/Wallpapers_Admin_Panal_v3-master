<?php

namespace App\Http\Controllers;

use App\Models\Ads;
use Illuminate\Http\Request;

class AdsController extends Controller
{
    public function allads(){
        $ads = Ads::all();
            return response()->json(["data"=>$ads]);





}
}
