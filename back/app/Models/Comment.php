<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'comment',
        'user_id',
        'post_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likes()
    {
        return $this->hasMany(CommentLike::class);
    }

    public function likedByUser($userId)
    {
        return $this->likes()->where('user_id', $userId)->exists();
    }

    public function getLikeCountAttribute()
    {
        return $this->likes()->count();
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
