<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdsController;
use App\Http\Controllers\CardsContoller;
use App\Http\Controllers\WallpapersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// ---------------------------------------------------------------------------
Route::get('/wallpapers', [WallpapersController::class, 'index']);
Route::get('/ads', [AdsController::class, 'allads']);
// ---------------------------------------------------------------------------

Route::post('/addWallpaper', [WallpapersController::class, 'addWallpaper']);

Route::get('/Cards', [CardsContoller::class, 'index']);

Route::delete('deleteWallpaper/{id}', [WallpapersController::class, 'destroy']);


Route::put('UpdateWallpaper/{id}', [WallpapersController::class, 'UpdateWallpaper']);
Route::put('UpdateAds/{id}', [AdsController::class, 'UpdateAds']);


