<?php

use App\Http\Controllers\HomeController;
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

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'index'])->name('about');
Route::get('/work', [HomeController::class, 'index'])->name('work');
Route::get('/services', [HomeController::class, 'index'])->name('services');
Route::get('/contact', [HomeController::class, 'index'])->name('contact');

Route::post('sendEmail', [HomeController::class, 'sendEmail'])->name('sendEmail');

// Preserved Design Archive Routes
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
