<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'ingredients','price', 'small_relation_price', 'medium_relation_price', 'big_relation_price', 'familiar_relation_price'
    ];

    /**
     * Get the post that owns the comment.
     */
    public function post()
    {
        return $this->belongsToMany('App\Cart');
    }
}
