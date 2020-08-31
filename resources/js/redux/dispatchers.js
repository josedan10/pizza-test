import {
    ADD_ITEM_TO_CART,
    SHOW_EDIT_MODAL,
    HIDE_EDIT_MODAL,
    EDIT_CART_ITEM,
    REMOVE_ITEM_FROM_CART,
    ADVANCE_INVOICE_STEP,
    INVOICE_ERROR,
    CLEAN_ERROR,
    CLEAN_INVOICE,
    UPDATE_LIST_ITEMS,
    UPDATE_STARRED_ITEMS,
    EMPTY_CART,
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

/**
 * Go to next invoice step
 *
 * @param {Number} activeStep
 * @param {String} address
 * @param {String} username
 * @export
 * @return {Object}
 */
export function advanceInvoiceStep(activeStep, address, username) {
    if (activeStep === 0 && (!address || !username)) {
        // Send error
        return {
            type: INVOICE_ERROR,
            error: "Please, fill all the fields",
        };
    }

    return {
        type: ADVANCE_INVOICE_STEP,
        address,
        username,
    };
}

/**
 * Cleans the error report on invoice
 *
 * @export
 * @return {Object}
 */
export function cleanError() {
    return {
        type: CLEAN_ERROR,
    };
}

/**
 * Fecth list items in the db
 *
 * @export
 * @param {Array} listItems
 * @return {Object}
 */
export function updateListItems(listItems) {
    return {
        type: UPDATE_LIST_ITEMS,
        listItems,
    };
}

/**
 * Fecth starred items list
 *
 * @export
 * @param {Array} carouselItems
 * @return {Object}
 */
export function updateStarredItems(carouselItems) {
    return {
        type: UPDATE_STARRED_ITEMS,
        carouselItems,
    };
}

/**
 * Clean Invoice data
 *
 * @export
 * @return {Object}
 */
export function cleanInvoice() {
    return {
        type: CLEAN_INVOICE,
    };
}

/**
 * Empty Cart
 *
 * @export
 * @return {Object}
 */
export function emptyCart() {
    return {
        type: EMPTY_CART,
    };
}
