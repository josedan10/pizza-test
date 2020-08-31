import {
    ADD_ITEM_TO_CART,
    SHOW_EDIT_MODAL,
    HIDE_EDIT_MODAL,
    EDIT_CART_ITEM,
    REMOVE_ITEM_FROM_CART,
    EMPTY_CART,
} from "../actions";

const initState = {
    totalAmount: 0.0,
    editingOrder: null,
    listItems: [],
};

const reducer = (state = initState, action) => {
    let newList;

    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                listItems: [...state.listItems, action.item],
                totalAmount: state.totalAmount + action.item.total,
            };

        case SHOW_EDIT_MODAL:
            return {
                ...state,
                editingOrder: action.order,
            };

        case EDIT_CART_ITEM:
            newList = [...state.listItems];
            let cartAmount = state.totalAmount;

            // Update cartItems list and total Amount
            cartAmount -= newList[action.cartIndex].total;
            cartAmount += action.item.total;
            newList[action.cartIndex] = action.item;

            return {
                ...state,
                editingOrder: null,
                listItems: [...newList],
                totalAmount: cartAmount,
            };

        case REMOVE_ITEM_FROM_CART:
            const itemToRemove = state.listItems[action.cartIndex];

            // Discount from total amount
            const newAmount = state.totalAmount - itemToRemove.total;
            newList = [state.listItems];
            newList.splice(action.cartIndex, 1);

            return {
                ...state,
                listItems: [...newList],
                totalAmount: newAmount,
            };

        case HIDE_EDIT_MODAL:
            return {
                ...state,
                editingOrder: action.order,
            };

        case EMPTY_CART:
            return {
                ...state,
                listItems: [],
                totalAmount: 0.0,
            };

        default:
            return {
                ...state,
            };
    }
};

export default reducer;
