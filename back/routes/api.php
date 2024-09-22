<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/register', [RegisterController::class, 'store']);
Route::post('/login', [LoginController::class, 'login']);

Route::get('/posts/{lim?}', [PostController::class, 'posts']);
Route::get('/post/{id}', [PostController::class, 'post']);
Route::post('/addPost', [PostController::class, 'addPost']);

Route::get('/comment/{post}', [CommentController::class, 'index']);
Route::get('/post/{id}', [PostController::class, 'post']);
Route::post('/posts/{post}/comments', [CommentController::class, 'store']);




