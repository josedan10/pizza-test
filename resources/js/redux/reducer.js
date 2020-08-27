import { ADD_ITEM_TO_CART } from "./actions";

const initState = {
    listItems: [],
    currency: "USD",
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                listItems: [...state.listItems, action.item],
            };

        default:
            return {
                ...state,
            };
    }
};

export default reducer;
