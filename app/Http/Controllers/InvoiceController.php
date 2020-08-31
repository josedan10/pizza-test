<?php

namespace App\Http\Controllers;

use App\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

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

        $is_valid = $request->validate(
            [
                'currency' => ['required', Rule::in(['USD', 'EUR'])],
                'address' => 'required|max:255',
                'username' => 'required|max:100',
                'totalAmount' => 'required',
                'listItems' => 'required|array'
            ]
        );

        if ($is_valid) {

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

        } else {
            return response('Error validating body data', 500);
        }

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
        
        if ($invoice) {
            // Get items details in the invoice: size and quantity
            $invoiceDetails = DB::table('invoices')
                                ->join('invoice_items', function ($join) use($id) {
                                    $join->on('invoices.id', '=', 'invoice_items.invoice_id')
                                         ->where('invoice_items.invoice_id', '=', $id);
                                })->get();
    
            $pdf = \PDF::loadView('invoice', compact('invoice', 'invoiceDetails'));
            return $pdf->stream();
        } else {
            return response()->redirectTo('/');
        }

    }
}
