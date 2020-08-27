/**
 * Format the price depending of the currency
 *
 * @export
 * @param {Number} price
 * @return {String}
 */
export function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

/**
 * Calculate the price using the item size relation, and multiplied by the quantity and price
 *
 * @export
 * @param {Number} price item price
 * @param {Number} quantity items quantity
 * @param {Number} size arrayIndex
 * @return {Number}
 */
export function priceCalculator(price, quantity, size) {
    return formatPrice(price * (quantity + size / 10));
}
