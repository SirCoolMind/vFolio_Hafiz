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

