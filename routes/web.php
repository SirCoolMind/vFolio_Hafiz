<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'index'])->name('about');
Route::get('/work', [HomeController::class, 'index'])->name('work');
Route::get('/contact', [HomeController::class, 'index'])->name('contact');
Route::get('/privacy', [HomeController::class, 'index'])->name('privacy');
Route::get('/terms', [HomeController::class, 'index'])->name('terms');

Route::get('sitemap.xml', [HomeController::class, 'sitemap'])->name('sitemap');

Route::post('sendEmail', [HomeController::class, 'sendEmail'])->name('sendEmail');
