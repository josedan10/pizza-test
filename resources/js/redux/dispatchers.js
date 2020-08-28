import { ADD_ITEM_TO_CART, SHOW_EDIT_MODAL, HIDE_EDIT_MODAL } from "./actions";

/**
 * Add item to cart store
 *
 * @export
 * @param {Object} item
 * @return {Object}
 */
export function addItemToCart(item) {
    return {
        type: ADD_ITEM_TO_CART,
        item,
    };
}

/**
 * Show the edit order modal
 *
 * @export
 * @param {Object} order
 * @return {Object}
 */
export function showEditModal(order) {
    return {
        type: SHOW_EDIT_MODAL,
        order,
    };
}

/**
 * Hide the edit order modal
 *
 * @export
 * @return {Object}
 */
export function hideEditModal() {
    return {
        type: HIDE_EDIT_MODAL,
        order: null,
    };
}
