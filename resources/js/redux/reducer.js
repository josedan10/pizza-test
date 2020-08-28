import { ADD_ITEM_TO_CART } from "./actions";

const initState = {
    listItems: [],
    totalAmount: 0.0,
    currency: "USD",
    currenciesList: ["USD", "EUR"],
    USDToEURRelation: 0.85,
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
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                listItems: [...state.listItems, action.item],
                totalAmount: state.totalAmount + action.item.total,
            };

        default:
            return {
                ...state,
            };
    }
};

export default reducer;