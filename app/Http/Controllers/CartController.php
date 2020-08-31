<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cart;
use App\Item;

class CartController extends Controller
{
    public function addItemToCart(Request $request, $cart_id) {

        $item = Item::find($request->id);
        $cart = Cart::find($cart_id);

        $cart->items()->save($item, ['quantity' => $request->quantity, 'size' => $request->size]);
    }
}
