import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "../utils/Button";

const InvoiceView3 = () => {
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
                <a href="#" className="print-invoice">
                    Print your invoice
                </a>
                <Link className="link-nodecorate" to="/">
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

export default InvoiceView3;
