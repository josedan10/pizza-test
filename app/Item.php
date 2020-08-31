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
        'name', 'ingredients','price', 'small_relation_price',
        'medium_relation_price', 'big_relation_price',
        'familiar_relation_price', 'img_url',
    ];

    /**
     * Get the invoices related with this item
     */
    public function invoices()
    {
        return $this->belongsToMany('App\Invoice', 'invoice_items', 'item_id', 'invoice_id');
    }
}
