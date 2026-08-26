<?php

use App\Http\Controllers\BudgetTrackerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ItemController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('', [HomeController::class, 'index'])->name('home');
Route::post('sendEmail', [HomeController::class, 'sendEmail'])->name('sendEmail');

Route::get('/design-1', function () {
    return view('vfolio.design-1');
})->name('design-1');

Route::get('/design-2', function () {
    return view('vfolio.design-2');
})->name('design-2');

Route::get('/design-3', function () {
    return view('vfolio.design-3');
})->name('design-3');

Route::get('/design-4', function () {
    return view('vfolio.design-4');
})->name('design-4');

Route::get('/design-5', function () {
    return view('vfolio.design-5');
})->name('design-5');

Route::get('/design-6', function () {
    return view('vfolio.design-6');
})->name('design-6');
