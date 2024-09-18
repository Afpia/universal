<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function posts($lim = 2)
    {
        $posts = Post::with('category', 'user')
        ->orderBy('created_at', 'desc')
        ->take($lim) 
        ->get();

        return response()->json($posts);
    }
}
