import { ADD_ITEM_TO_CART } from "./actions";

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
