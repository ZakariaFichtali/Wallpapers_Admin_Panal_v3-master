<?php

namespace App\Http\Controllers;

use App\Models\Ads;
use Illuminate\Http\Request;

class AdsController extends Controller
{
    public function allads(){
        $ads = Ads::all();
            // return response()->json(["data"=>$ads]);

            $ads = Ads::all();
            return $ads;

            //     if ($ads->isEmpty()) {
            //     return response()->json(['users' => null]);
            // }

            // return response()->json(['Ads' => $ads->first()]);

}



    public function UpdateAds(Request  $request , $id){
        $ads = Ads::find($id);
        $ads->show_ads=$request->show_ads;
        $ads->bannerAd=$request->bannerAd;
        $ads->InterAd=$request->InterAd;
        $ads->NativeAd=$request->NativeAd;
        $ads->save();
    }

}
