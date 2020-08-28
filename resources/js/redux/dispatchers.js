import {
    ADD_ITEM_TO_CART,
    SHOW_EDIT_MODAL,
    HIDE_EDIT_MODAL,
    EDIT_CART_ITEM,
    REMOVE_ITEM_FROM_CART,
} from "./actions";

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
 *  Edit selected cart item
 *
 * @export
 * @param {Object} item
 * @param {Number} cartIndex
 * @return {Object}
 */
export function editCartItem(item, cartIndex) {
    return {
        type: EDIT_CART_ITEM,
        item,
        cartIndex,
    };
}

/**
 * Remove item from cart
 *
 * @export
 * @param {Object} cartIndex
 * @return {Object}
 */
export function removeItemFromCart(cartIndex) {
    return {
        type: REMOVE_ITEM_FROM_CART,
        cartIndex,
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
