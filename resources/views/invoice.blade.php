<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        html {
            font-family: Arial, Helvetica, sans-serif;
        }

        .header {
            height: 40px;
            color: white;
            font-weight: bold;
            padding: 10px;
            font-size: 26px;
            background-color: #D12508;
            text-align: right;
        }

        .costumer-data {
            margin-top: 10px;
        }

        .costumer-data .data {
            margin-bottom: 15px;
        }

        .costumer-data b {
            color: #D98B00;
        }

        table,
        table td {
            margin-top: 40px;
            width: 100%;
            border: solid 2px #cacaca;
            border-collapse: collapse;
        }

        table td {
            padding: 10px;
        }

        table tr:first-child td {
            background-color: #C2C10A;
            color: white;
            font-size: 20px;
            font-weight: bold;
        }

        .delivery-price {
            text-align: right;
            margin-top: 20px;
        }

        .totalAmount {
            font-size: 26px;
            text-align: right;
            margin-top: 40px;
        }

        .totalAmount .amount{
            color: #D12508;
            font-weight: bold;
            font-size: 32px;
        }
    </style>
</head>
<body>

    <div class="header">
        Invoice #{{$invoice->id}}
    </div>
    <div class="costumer-data">
        <div class="data"><b>Costumer:</b> {{ $invoice->user_name }}</div>
        <div class="data"><b>Delivery at:</b> {{ $invoice->address }}</div>
    </div>

    <table>
        <tr>
            <td>Item</td>
            <td>Size</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
        </tr>
        @foreach ($invoice->items as $item)
            <tr>
                @php
                    $amountIndv = $item->price * $item[$item->size.'_relation_price'] + $item->price;
                @endphp

                <td>{{ $item->name }}</td>
                <td>{{ $item->size }}</td>
                <td>{{ $amountIndv }}</td>
                <td>{{ $item->quantity }}</td>
                <td>{{ $item->quantity * $amountIndv }}</td>
            </tr>
        @endforeach
    </table>

    <div class="delivery-price">Delivery price: <b>{{ $invoice->delivery_price }}</b></div>
    <div class="totalAmount">Total: <div class="amount">{{ $invoice->total_amount }}</div></div>
</body>
</html>