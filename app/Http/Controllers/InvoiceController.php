<?php

namespace App\Http\Controllers;

use App\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    /**
     * This function process the items on the cart and save it to generate the invoice
     *
     * @param Request $request
     * @return void
     */
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

        return response([
            'msg' => 'Saved '.count($request->input('listItems')). " items",
            'invoice_id' => $invoice->id
        ], 200);
    }

    /**
     * Generate the PDF to print the invoice
     *
     * @param Request $request
     * @param Number $id
     * @return void
     */
    public function printInvoice (Request $request, $id) {
        $invoice = Invoice::find($id);
        $pdf = \PDF::loadView('invoice', compact('invoice'));
        return $pdf->stream();
    }
}
