import { ADD_ITEM_TO_CART, SHOW_EDIT_MODAL } from "../actions";

const initState = {
    usdToEur: 0.85,
    totalAmount: 0.0,
    showEditModal: false,
    editingOrder: null,
    listItems: [],
};

const reducer = (state = initState, action) => {
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
                showEditModal: true,
            };

        default:
            return {
                ...state,
            };
    }
};

export default reducer;
