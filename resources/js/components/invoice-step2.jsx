import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

import { advanceInvoiceStep } from "../redux/dispatchers";
import CartItem from "../utils/CartItem";
import Button from "../utils/Button";
import { formatPrice } from "../helperFunctions/price";

const InvoiceStep2 = ({
    cart,
    address,
    username,
    totalAmount,
    advanceInvoiceStep,
    deliveryCost,
    activeStep,
    currency,
}) => {
    const finishPurchase = async () => {
        try {
            return axios.post("/api/checkout", {
                listItems: cart.listItems,
                currency,
                username,
                address,
                totalAmount,
            });
        } catch (err) {
            console.log(err);
        }
    };

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
                        Dear, <b>{username}</b>
                    </div>
                    <div className="order-price">
                        <b>Delivery at:</b> <br /> {address}
                    </div>
                    <div className="order-price">
                        <b>Products:</b>{" "}
                        {formatPrice(cart.totalAmount, currency)}
                    </div>
                    <div className="order-price">
                        <b>Delivery:</b> {formatPrice(deliveryCost, currency)}
                    </div>
                    <div className="disclaimer">
                        The payment must be done when you receive your purchase.
                    </div>
                    <div className="order-total-amount">
                        Total:{" "}
                        {formatPrice(cart.totalAmount + deliveryCost, currency)}
                    </div>
                </div>
                <Button
                    onClick={() => {
                        finishPurchase()
                            .then((res) => {
                                advanceInvoiceStep(activeStep);
                            })
                            .catch((err) => console.log(err));
                    }}
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
    username: PropTypes.string,
    advanceInvoiceStep: PropTypes.func.isRequired,
    deliveryCost: PropTypes.number,
    activeStep: PropTypes.number,
    currency: PropTypes.string,
    totalAmount: PropTypes.number,
};

const mapStateToProps = (state) => ({
    cart: state.cart,
    address: state.invoice.address,
    username: state.invoice.username,
    deliveryCost: state.invoice.deliveryCost,
    activeStep: state.invoice.activeStep,
    currency: state.data.currency,
    totalAmount: state.cart.totalAmount,
});

const mapDispatchToProps = (dispatch) => ({
    advanceInvoiceStep: (step) => dispatch(advanceInvoiceStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceStep2);
