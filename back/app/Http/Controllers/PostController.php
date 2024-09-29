<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Category;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $lim = $request->query('limit', 12);
        $categoryName = $request->query('categories');

        $query = Post::with('category', 'user')
            ->orderBy('created_at', 'desc');

        if ($categoryName) {
            $query->whereHas('category', function ($q) use ($categoryName) {
                $q->where('title', $categoryName);
            });
        }

        $posts = $query->take($lim)->get();

        $posts = $posts->map(function ($post) {
            $post->date = $post->formatDate();

            $limit = 50;
            $post->shortText = mb_substr($post->text, 0, $limit) . '...';

            return $post;
        });

        return response()->json($posts);
    }

    public function view($id)
    {
        $post = Post::with('category', 'user')->find($id);

        $post->date = $post->formatDate();

        return response()->json($post);
    }

    public function store(Request $request)
    {
        $post = Post::create([
            'title' => $request->title,
            'text' => $request->text,
            'category_id' => $request->category,
            'user_id' => $request->user_id,
        ]);

        return response()->json([
            'message' => 'succes',
            'user' => $post,
        ]);
    }

    public function categories()
    {
        $categories = Category::withCount([
            'posts as comments_count' => function ($query) {
                $query->withCount('comments');
            }
        ])
            ->orderBy('comments_count', 'desc')
            ->get();

        return response()->json($categories);
    }

    public function destroy($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['error' => 'Post not found'], 404);
        }

        $post->delete();

        return response()->json(['message' => 'Post deleted successfully'], 200);
    }

    public function update(Request $request, $id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['error' => 'Post not found'], 404);
        }

        $request->validate([
            'category_id' => 'required|exists:categories,id',
        ]);

        $post->update([
            'title' => $request->input('title'),
            'text' => $request->input('text'),
            'category_id' => $request->input('category_id'),
        ]);

        return response()->json(['message' => 'Post updated successfully', 'post' => $post], 200);
    }
}
