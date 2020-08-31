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
                'description' => 'Qui dolore in mollit nisi pariatur aute est dolore. Proident laboris aliquip dolore dolore cillum minim incididunt. Anim exercitation fugiat nulla dolore aute tempor dolore.',
                'price' => 2.34,
                'small_relation_price' => 0,
                'medium_relation_price' => 0.3,
                'big_relation_price' => 0.5,
                'familiar_relation_price' => 0.9,
                'img_url' => '/images/pizzas/pizza-margarita.jpg',
                'starred' => true,
                'starred_img' => '/images/starredPosts/pizzaBg2.jpg'
            ],
            [
                'name' => 'Pichinolli Special',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'description' => 'Non irure sit irure tempor eiusmod. Dolore proident ad mollit cillum ipsum reprehenderit qui aliquip dolor. Culpa nulla exercitation in id dolore.Occaecat consequat nostrud quis.',
                'price' => 4.67,
                'small_relation_price' => 0,
                'medium_relation_price' => 0.3,
                'big_relation_price' => 0.5,
                'familiar_relation_price' => 0.9,
                'img_url' => '/images/pizzas/pizza-margarita.jpg',
                'starred' => true,
                'starred_img' => '/images/starredPosts/pizzaBg1.jpg'
            ],
            [
                'name' => 'Amazing pizza',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'description' => 'Quis do cillum enim irure magna in reprehenderit ullamco sint adipisicing quis. Cupidatat ullamco laboris cillum pariatur exercitation ullamco ut do ex. In enim mollit tempor enim non id.',
                'price' => 5.05,
                'small_relation_price' => 0,
                'medium_relation_price' => 0.3,
                'big_relation_price' => 0.5,
                'familiar_relation_price' => 0.9,
                'img_url' => '/images/pizzas/pizza-margarita.jpg',
                'starred' => false,
                'starred_img' => '/images/starredPosts/pizzaBg1.jpg'
            ],
            [
                'name' => 'Vegetarian pizza',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'description' => 'Amet duis in esse non. Ut aliqua consequat deserunt aliquip. Sit duis pariatur laborum sint elit eiusmod pariatur duis deserunt.Eiusmod laboris sint aute cillum laborum excepteur minim exercitation.',
                'price' => 4.85,
                'small_relation_price' => 0,
                'medium_relation_price' => 0.3,
                'big_relation_price' => 0.5,
                'familiar_relation_price' => 0.9,
                'img_url' => '/images/pizzas/pizza-margarita.jpg',
                'starred' => false,
                'starred_img' => '/images/starredPosts/pizzaBg1.jpg'
            ],
            [
                'name' => 'Unpopular pizza',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'description' => 'Reprehenderit nisi ipsum consequat esse laborum sint do deserunt ullamco proident. Laboris eu sint laboris ea ex ullamco ut consectetur culpa non ipsum. Occaecat duis.',
                'price' => 3.47,
                'small_relation_price' => 0,
                'medium_relation_price' => 0.3,
                'big_relation_price' => 0.5,
                'familiar_relation_price' => 0.9,
                'img_url' => '/images/pizzas/pizza-margarita.jpg',
                'starred' => false,
                'starred_img' => '/images/starredPosts/pizzaBg1.jpg'
            ]
        ]);
    }
}
