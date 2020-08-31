// import {  } from "./actions";

import { UPDATE_LIST_ITEMS, UPDATE_STARRED_ITEMS } from "../actions";

const initState = {
    currency: "USD",
    currenciesList: ["USD", "EUR"],
    sizes: ["Small", "Medium", "Big", "Familiar"],
    pizzasList: [],
    carouselItems: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_LIST_ITEMS:
            return {
                ...state,
                pizzasList: [...action.listItems],
            };

        case UPDATE_STARRED_ITEMS:
            return {
                ...state,
                carouselItems: [...action.carouselItems],
            };

        default:
            return {
                ...state,
            };
    }
};

export default reducer;
