<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function posts(int $lim = 5)
    {
        $posts = Post::with('category', 'user')
        ->orderBy('created_at', 'desc')
        ->take($lim) 
        ->get();

        return response()->json($posts);
    }

    public function post($id)
    {
        $post = Post::with('category', 'user')->find($id);

        return response()->json($post);
    }

    public function addPost(Request $request)
    {
        $post = Post::create([
            'title' => $request->title,
            'text' => $request->text,
            'category_id' => $request->category,
            'user_id' => $request->user,
        ]);

        return response()->json([
            'message' => 'succes',
            'user' => $post,
        ]);
    }
}
