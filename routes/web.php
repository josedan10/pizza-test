<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [
    'uses' => 'FrontendController@show',
    'as' => 'react',
]);

Route::get('invoice', [
    'uses' => 'FrontendController@show',
    'as' => 'react',
]);

Route::prefix('api')->group(function () {
    Route::get('items', 'ItemsController@getItems');
    Route::get('items/starred', 'ItemsController@getStarredItems');
    Route::post('checkout', 'InvoiceController@checkout');
});

Route::get('print-invoice/{id}', 'InvoiceController@printInvoice');

