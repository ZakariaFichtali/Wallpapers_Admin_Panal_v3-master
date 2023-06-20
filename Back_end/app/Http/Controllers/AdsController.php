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
// show_ads
        $ads->show_ads=$request->show_ads;
// ads
        $ads->bannerAd=$request->bannerAd;
        $ads->InterAd=$request->InterAd;
        $ads->NativeAd=$request->NativeAd;
// admob
        $ads->admob_banner=$request->admob_banner;
        $ads->admob_inter=$request->admob_inter;
        $ads->admob_native=$request->admob_native;
// facebook
        $ads->facebook_banner=$request->facebook_banner;
        $ads->facebook_inter=$request->facebook_inter;
        $ads->facebook_native=$request->facebook_native;

// max
        $ads->max_banner=$request->max_banner;
        $ads->max_inter=$request->max_inter;
        $ads->max_native=$request->max_native;


// ironsource_api
$ads->ironsource_api=$request->ironsource_api;

// unityTest
$ads->unityTest=$request->unityTest;

$ads->unityGameID=$request->unityGameID;
$ads->unityBanner=$request->unityBanner;
$ads->unityInter=$request->unityInter;


// intersitial_click
$ads->intersitial_click_activites=$request->intersitial_click_activites	;
$ads->intersitial_click_list=$request->intersitial_click_list;



        $ads->save();
    }

}
