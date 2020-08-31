<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'totalAmount', 'delivery_price', 'usd_to_eur', 'address',
    ];

    public function items () {
        $this->belongsToMany("App\Item");
    }
}
