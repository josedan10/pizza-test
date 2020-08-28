import { ADD_ITEM_TO_CART, SHOW_EDIT_MODAL } from "./actions";

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
 * Trigger the edit modal
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
