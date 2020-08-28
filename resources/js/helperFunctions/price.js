/**
 * Format the price depending of the currency
 *
 * @export
 * @param {Number} price
 * @param {String} currency
 * @return {String}
 */
export function formatPrice(price, currency) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency,
    }).format(price);
}

/**
 * Calculate the price using the item size relation, and multiplied by the quantity and price
 * If the currency is not passed the price is not formatted
 *
 * @export
 * @param {Number} price item price
 * @param {Number} quantity items quantity
 * @param {Number} size arrayIndex
 * @param {String} currency
 * @return {Number}
 */
export function priceCalculator(price, quantity, size, currency = "") {
    const total = price * (quantity + size / 10);
    return currency !== "" ? formatPrice(total, currrency) : total;
}