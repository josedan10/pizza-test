import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "../utils/Button";
import { formatPrice } from "../helperFunctions/price";
import { advanceInvoiceStep } from "../redux/dispatchers";

const InvoiceStep1 = ({ advanceInvoiceStep, deliveryCost, activeStep }) => {
    const address = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        advanceInvoiceStep(activeStep, address.current.value);
    };

    // const [address, setAddress] = React.useState("");

    return (
        <div className="invoice invoice-step1">
            <form method="post" onSubmit={handleSubmit}>
                <label className="invoice-title">Delivery address</label>
                <textarea
                    className="delivery-address-input"
                    placeholder="Where do you want receive your order?"
                    ref={address}
                ></textarea>
                <div className="delivery-price">
                    Delivery charge:{" "}
                    <span className="delivery-price-cost">
                        {formatPrice(deliveryCost, "USD")}
                    </span>
                </div>
                <Button type="submit" className="btn--green btn-action">
                    Next
                </Button>
            </form>
        </div>
    );
};

InvoiceStep1.propTypes = {
    advanceInvoiceStep: PropTypes.func.isRequired,
    deliveryCost: PropTypes.number,
    activeStep: PropTypes.number,
};

const mapStateToProps = (state) => ({
    deliveryCost: state.invoice.deliveryCost,
    activeStep: state.invoice.activeStep,
});

const mapDispatchToProps = (dispatch) => ({
    advanceInvoiceStep: (activeStep, address) =>
        dispatch(advanceInvoiceStep(activeStep, address)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceStep1);
