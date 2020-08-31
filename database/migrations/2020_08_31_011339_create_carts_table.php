<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->float('total_amount', 6, 2)->default(0.00);
            $table->float('delivery_price', 4, 2)->default(2.38);
            $table->float('usd_to_eur', 4, 2)->default(0.85);
            $table->string('address', 255);
            $table->enum('currency', ['USD', 'EUR'])->default('USD');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carts');
    }
}
