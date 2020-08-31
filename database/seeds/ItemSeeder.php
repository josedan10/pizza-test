<?php

use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert([
            [
                'name' => 'Margarita',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion',
                'price' => 2.34,
                'small_relation_price' => 1,
                'medium_relation_price' => 1.3,
                'big_relation_price' => 1.5,
                'familiar_relation_price' => 1.9
            ],
            [
                'name' => 'Pichinolli Special',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'price' => 4.67,
                'small_relation_price' => 1,
                'medium_relation_price' => 1.3,
                'big_relation_price' => 1.5,
                'familiar_relation_price' => 1.9
            ],
            [
                'name' => 'Amazing pizza',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'price' => 5.15,
                'small_relation_price' => 1,
                'medium_relation_price' => 1.3,
                'big_relation_price' => 1.5,
                'familiar_relation_price' => 1.9
            ],
            [
                'name' => 'Vegetarian pizza',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'price' => 4.85,
                'small_relation_price' => 1,
                'medium_relation_price' => 1.3,
                'big_relation_price' => 1.5,
                'familiar_relation_price' => 1.9
            ],
            [
                'name' => 'Unpopular pizza',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'price' => 3.47,
                'small_relation_price' => 1,
                'medium_relation_price' => 1.3,
                'big_relation_price' => 1.5,
                'familiar_relation_price' => 1.9
            ]
        ]);
    }
}
