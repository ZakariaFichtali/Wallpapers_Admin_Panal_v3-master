<?php

use App\Http\Controllers\AdsController;
use App\Http\Controllers\CardsContoller;
use App\Http\Controllers\WallpapersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
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


