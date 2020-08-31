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
                'description' => 'Qui dolore in mollit nisi pariatur aute est dolore. Proident laboris aliquip dolore dolore cillum minim incididunt. Anim exercitation fugiat nulla dolore aute tempor dolore. Reprehenderit commodo amet officia nulla adipisicing fugiat sit aute sunt elit sint excepteur. Ea reprehenderit tempor ex aliquip sit excepteur duis ad mollit ut enim anim dolor.Deserunt aliqua dolore culpa eu tempor elit laborum sint aliquip id dolore. Do fugiat proident fugiat id magna. Velit fugiat veniam reprehenderit cupidatat sunt ullamco ut Lorem aute adipisicing est amet duis. Culpa aliquip aliquip dolore anim dolor dolor Lorem proident do minim veniam eu esse. Nisi ea cupidatat qui laborum proident. Dolore officia id cillum cupidatat do culpa elit consequat duis pariatur esse proident. Adipisicing cupidatat quis laborum quis anim proident minim enim voluptate.',
                'price' => 2.34,
                'small_relation_price' => 0,
                'medium_relation_price' => 0.3,
                'big_relation_price' => 0.5,
                'familiar_relation_price' => 0.9,
                'img_url' => '/images/pizzas/pizza-margarita.jpg',
                'starred' => true,
                'starred_img' => '/images/starredPost/pizzaBg2.jpg'
            ],
            [
                'name' => 'Pichinolli Special',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'description' => 'Non irure sit irure tempor eiusmod. Dolore proident ad mollit cillum ipsum reprehenderit qui aliquip dolor. Culpa nulla exercitation in id dolore.Occaecat consequat nostrud quis incididunt tempor Lorem dolor culpa esse duis id consequat duis ipsum. Cupidatat excepteur in tempor laborum occaecat nulla quis aliqua incididunt minim nisi. Tempor voluptate enim deserunt elit labore exercitation dolor irure exercitation ipsum Lorem consectetur sint ea. Magna proident do dolore cillum anim tempor anim nisi proident non.',
                'price' => 4.67,
                'small_relation_price' => 0,
                'medium_relation_price' => 0.3,
                'big_relation_price' => 0.5,
                'familiar_relation_price' => 0.9,
                'img_url' => '/images/pizzas/pizza-margarita.jpg',
                'starred' => true,
                'starred_img' => '/images/starredPost/pizzaBg1.jpg'
            ],
            [
                'name' => 'Amazing pizza',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'description' => 'Quis do cillum enim irure magna in reprehenderit ullamco sint adipisicing quis. Cupidatat ullamco laboris cillum pariatur exercitation ullamco ut do ex. In enim mollit tempor enim non id consectetur eiusmod ipsum occaecat. Ex dolor do do ex. Enim pariatur excepteur amet ex cupidatat occaecat minim do. Minim anim adipisicing aliqua cillum velit.Occaecat laborum mollit irure in non nostrud velit nulla aliquip non anim. Incididunt nisi amet voluptate ea qui cupidatat nulla in voluptate ad eiusmod in nisi. Commodo sit aliquip elit reprehenderit adipisicing veniam duis ex ipsum eiusmod ea ad ea.',
                'price' => 5.05,
                'small_relation_price' => 0,
                'medium_relation_price' => 0.3,
                'big_relation_price' => 0.5,
                'familiar_relation_price' => 0.9,
                'img_url' => '/images/pizzas/pizza-margarita.jpg',
                'starred' => false,
                'starred_img' => '/images/starredPost/pizzaBg1.jpg'
            ],
            [
                'name' => 'Vegetarian pizza',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'description' => 'Amet duis in esse non. Ut aliqua consequat deserunt aliquip. Sit duis pariatur laborum sint elit eiusmod pariatur duis deserunt.Eiusmod laboris sint aute cillum laborum excepteur minim exercitation. Deserunt amet anim duis laboris veniam labore. Velit ea aliquip incididunt tempor ad nostrud ad ipsum dolore deserunt in laborum. Ad officia ad aliquip magna do voluptate exercitation. Cupidatat proident ea in tempor anim.',
                'price' => 4.85,
                'small_relation_price' => 0,
                'medium_relation_price' => 0.3,
                'big_relation_price' => 0.5,
                'familiar_relation_price' => 0.9,
                'img_url' => '/images/pizzas/pizza-margarita.jpg',
                'starred' => false,
                'starred_img' => '/images/starredPost/pizzaBg1.jpg'
            ],
            [
                'name' => 'Unpopular pizza',
                'ingredients' => 'tomato sauce, mozzarella cheese, onion, corn, bacon',
                'description' => 'Reprehenderit nisi ipsum consequat esse laborum sint do deserunt ullamco proident. Laboris eu sint laboris ea ex ullamco ut consectetur culpa non ipsum. Occaecat duis eu ad est esse sunt culpa occaecat excepteur sunt eiusmod quis veniam. Proident ad magna et aliquip pariatur aliquip.',
                'price' => 3.47,
                'small_relation_price' => 0,
                'medium_relation_price' => 0.3,
                'big_relation_price' => 0.5,
                'familiar_relation_price' => 0.9,
                'img_url' => '/images/pizzas/pizza-margarita.jpg',
                'starred' => false,
                'starred_img' => '/images/starredPost/pizzaBg1.jpg'
            ]
        ]);
    }
}
