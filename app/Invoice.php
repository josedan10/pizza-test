<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'address', 'currency', 'total_amount', 'delivery_price', 'user_name'
    ];

    /**
     *  Get the items included in this invoice
     */
    public function items() {
        return $this->belongsToMany('App\Item', 'invoice_items', 'invoice_id', 'item_id');
    }
}
