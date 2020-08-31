<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getItems()
    {
        $items = Item::all();
        return response($items, 200);
    }
    
    /**
     * Returns the starred items.
     *
     * @return \Illuminate\Http\Response
     */
    public function getStarredItems()
    {
        $items = Item::where('starred', true)->get();
        return response($items, 200);
    }
}
