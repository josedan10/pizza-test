// import {  } from "./actions";

const initState = {
    currency: "USD",
    currenciesList: ["USD", "EUR"],
    sizes: ["Small", "Medium", "Big", "Familiar"],
    pizzasList: [
        {
            id: 1,
            qty: 1,
            price: 9.99,
            name: "Margarita",
            ingredients:
                "Aliquip sunt magna culpa non ut voluptate exercitation. Commodo dolor voluptate pariatur occaecat magna consequat consectetur labore labore est non id voluptate nulla. Nostrud labore qui adipisicing do aute ea adipisicing ad. Nisi mollit et pariatur veniam cupidatat sit tempor et consequat ut qui incididunt irure ut. Esse proident cupidatat et nulla est pariatur enim duis aliqua. Nisi ea ullamco dolor aute esse dolore nulla magna aliqua excepteur nostrud ipsum cupidatat officia. Duis amet labore Lorem consectetur ex non.",
            imgUrl: "/images/pizzas/pizza-margarita.jpg",
        },
        {
            id: 2,
            qty: 1,
            price: 11.95,
            name: "Special Pichinolli",
            ingredients:
                "Aliquip sunt magna culpa non ut voluptate exercitation. Commodo dolor voluptate pariatur occaecat magna consequat consectetur labore labore est non id voluptate nulla. Nostrud labore qui adipisicing do aute ea adipisicing ad. Nisi mollit et pariatur veniam cupidatat sit tempor et consequat ut qui incididunt irure ut. Esse proident cupidatat et nulla est pariatur enim duis aliqua. Nisi ea ullamco dolor aute esse dolore nulla magna aliqua excepteur nostrud ipsum cupidatat officia. Duis amet labore Lorem consectetur ex non.",
            imgUrl: "/images/pizzas/pizza-margarita.jpg",
        },
        {
            id: 3,
            qty: 1,
            price: 7.89,
            name: "Hawaian",
            ingredients:
                "Aliquip sunt magna culpa non ut voluptate exercitation. Commodo dolor voluptate pariatur occaecat magna consequat consectetur labore labore est non id voluptate nulla. Nostrud labore qui adipisicing do aute ea adipisicing ad. Nisi mollit et pariatur veniam cupidatat sit tempor et consequat ut qui incididunt irure ut. Esse proident cupidatat et nulla est pariatur enim duis aliqua. Nisi ea ullamco dolor aute esse dolore nulla magna aliqua excepteur nostrud ipsum cupidatat officia. Duis amet labore Lorem consectetur ex non.",
            imgUrl: "/images/pizzas/pizza-margarita.jpg",
        },
    ],
    carouselItems: [
        {
            id: 1,
            title: "Pichinolli Especial",
            content:
                "Anim id proident sit ullamco laboris minim ipsum ullamco enim cillum. Laborum ut magna fugiat veniam cupidatat tempor qui consectetur. Veniam excepteur elit enim amet reprehenderit nostrud laboris elit mollit velit cupidatat aliqua incididunt. Velit ullamco officia dolore esse ad enim sunt eiusmod labore minim. Ullamco reprehenderit pariatur veniam cillum ipsum labore magna est.",
            linkURL: "#",
            linkCaption: "¡LO QUIERO YA!",
            image: "/images/starredPosts/pizzaBg1.jpg",
        },
        {
            id: 2,
            title: "Title 2",
            content:
                "Duis magna et irure proident ea aliqua aliqua culpa proident est velit laboris laboris velit. Sunt excepteur in incididunt ullamco cillum aute ut. Incididunt nulla eu sit Lorem incididunt.",
            linkURL: "#",
            linkCaption: "¡LO QUIERO YA!",
            image: "/images/starredPosts/pizzaBg2.jpg",
        },
    ],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
            };
    }
};

export default reducer;
