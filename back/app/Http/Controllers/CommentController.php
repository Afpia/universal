<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function index(Post $post)
    {
        $comments = $post->comments->map(function ($comment) {
            return [
                'id' => $comment->id,
                'comment' => $comment->comment,
                'user' => $comment->getUser(),
                'likes' => $comment->like_count,
            ];
        });

        return response()->json($comments);
    }

    public function store(Request $request, Post $post)
    {
        $comment = Comment::create([
            'comment' => $request->comment,
            'user_id' => (int) $request->id,
            'post_id' => $post->id,
        ]);

        return response()->json($comment);
    }

    public function like(Request $request, Comment $comment)
    {
        $like = $comment->likes()->firstOrCreate([
            'user_id' => $request->user_id,
        ]);

        return response()->json($like, 201);
    }

    public function unlike(Request $request, Comment $comment)
    {
        $like = $comment->likes()->where('user_id', auth()->id())->first();

        if ($like) {
            $like->delete();
        }

        return response()->json(null, 204);
    }
}
