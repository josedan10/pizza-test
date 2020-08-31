import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "../utils/Button";
import { cleanInvoice, emptyCart } from "../redux/dispatchers";

const InvoiceView3 = ({ cleanInvoice, emptyCart, invoiceId }) => {
    return (
        <div className="invoice invoice-step3">
            <div className="invoice-content-wrapper">
                <div className="invoice-title">Your order is on way!</div>
                <FontAwesomeIcon
                    className="icon"
                    icon={["fas", "biking"]}
                    size="10x"
                />
                <div className="note">Thank you for trust in our service</div>
                <a
                    href={"/print-invoice/" + invoiceId}
                    className="print-invoice"
                >
                    Print your invoice
                </a>
                <Link
                    onClick={() => {
                        cleanInvoice();
                        emptyCart();
                    }}
                    className="link-nodecorate"
                    to="/"
                >
                    <Button
                        variant="contained"
                        className="btn--green btn-action"
                    >
                        Buy Again
                    </Button>
                </Link>
            </div>
        </div>
    );
};

InvoiceView3.propTypes = {
    cleanInvoice: PropTypes.func.isRequired,
    emptyCart: PropTypes.func.isRequired,
    invoiceId: PropTypes.number,
};

const mapStateToProps = (state) => ({
    invoiceId: state.invoice.invoiceId,
});

const mapDispatchToProps = (dispatch) => ({
    cleanInvoice: () => dispatch(cleanInvoice()),
    emptyCart: () => dispatch(emptyCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceView3);
