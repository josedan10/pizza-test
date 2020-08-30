import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { advanceInvoiceStep } from "../redux/dispatchers";
import CartItem from "../utils/CartItem";
import Button from "../utils/Button";
import { formatPrice } from "../helperFunctions/price";

const InvoiceStep2 = ({
    cart,
    address,
    advanceInvoiceStep,
    deliveryCost,
    activeStep,
}) => {
    return (
        <div className="invoice invoice-step2">
            <div className="order-details-left">
                <div className="invoice-title">Purchase summary</div>
                {cart.listItems.map((item, itemInd) => (
                    <CartItem
                        key={`preview-cart-item-${itemInd}`}
                        orderData={item}
                        cartIndex={itemInd}
                    />
                ))}
            </div>
            <div className="order-details-right">
                <div className="order-details-wrapper">
                    <div className="order-price">
                        <b>Delivery to:</b> <br /> {address}
                    </div>
                    <div className="order-price">
                        <b>Products:</b> {formatPrice(cart.totalAmount, "USD")}
                    </div>
                    <div className="order-price">
                        <b>Delivery:</b> {formatPrice(deliveryCost, "USD")}
                    </div>
                    <div className="disclaimer">
                        The payment must be done when you receive your purchase.
                    </div>
                    <div className="order-total-amount">
                        Total:{" "}
                        {formatPrice(cart.totalAmount + deliveryCost, "USD")}
                    </div>
                </div>
                <Button
                    onClick={() => advanceInvoiceStep(activeStep)}
                    className="btn--green btn-action"
                >
                    Confirm Order
                </Button>
            </div>
        </div>
    );
};

InvoiceStep2.propTypes = {
    cart: PropTypes.object,
    address: PropTypes.string,
    advanceInvoiceStep: PropTypes.func.isRequired,
    deliveryCost: PropTypes.number,
    activeStep: PropTypes.number,
};

const mapStateToProps = (state) => ({
    cart: state.cart,
    address: state.invoice.address,
    deliveryCost: state.invoice.deliveryCost,
    activeStep: state.invoice.activeStep,
});

const mapDispatchToProps = (dispatch) => ({
    advanceInvoiceStep: (step) => dispatch(advanceInvoiceStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceStep2);
