<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Post;

class CommentController extends Controller
{
    public function index(Post $post)
    {
        $comments = $post->comments;

        return response()->json($comments);
    }

    public function store(Request $request, Post $post)
    {
        $comment = $post->comments()->create([
            'content' => $request->comment,
            'user_id' => auth()->id(),
        ]);

        return response()->json($comment, 201);
    }
}
