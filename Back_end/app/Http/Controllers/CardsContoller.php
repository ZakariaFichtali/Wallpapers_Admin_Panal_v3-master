<?php

namespace App\Http\Controllers;

use App\Models\Cards;
use Illuminate\Http\Request;

class CardsContoller extends Controller
{
    //
    public function index(){
        $cards = Cards::all();
        return response()->json($cards);
    }
}