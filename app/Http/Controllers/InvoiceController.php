<?php

namespace App\Http\Controllers;

use App\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function checkout(Request $request) {
        $invoice = new Invoice();

        $sizes = ['small', 'medium', 'big', 'familiar'];

        $invoice->currency = $request->input('currency');
        $invoice->address = $request->input('address');
        $invoice->user_name = $request->input('username');
        $invoice->total_amount = $request->input("totalAmount");

        $invoice->save();

        foreach ($request->input('listItems') as $item) {
            $invoice->items()
                ->attach(
                    $item['itemId'],
                    [
                        'quantity' => $item['quantity'],
                        'size' => $sizes[$item['size']]
                    ]
                );
        }

        return response('Saved '.count($request->input('listItems')). " items", 200);
    }
}
