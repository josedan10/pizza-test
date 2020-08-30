import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "../utils/Button";
import { formatPrice } from "../helperFunctions/price";
import { advanceInvoiceStep } from "../redux/dispatchers";

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        border-radius: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
        width: 100%;
        padding: 55px 40px 30px;

        .delivery-address-label {
            display: block;
            color: ${(props) => props.theme.orange};
            font-weight: bold;
            font-size: 1.5rem;
            margin-bottom: 21px;
        }

        .delivery-address-input {
            border: 2px solid #cacaca;
            border-radius: 10px;
            min-height: 188px;
            background: transparent;
            width: 100%;
            padding: 1rem;
            resize: vertical;
            margin-bottom: 30px;

            &::placeholder {
                color: #9d9d9d;
            }
        }

        .delivery-price {
            color: #9d9d9d;
            font-size: 1.125rem;

            &-cost {
                color: ${(props) => props.theme.red};
                font-weight: bold;
                font-size: 1.75rem;
                margin-left: 1rem;
            }
        }

        .btn--green {
            margin-top: 40px;
            width: 100%;
            height: 4.75rem;
            font-size: 1.5rem;
        }
    }
`;

const InvoiceStep1 = ({ advanceInvoiceStep }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        advanceInvoiceStep(address.current.value);
    };

    const address = React.createRef();
    const deliveryCost = 2.3;

    return (
        <StyledContainer className="invoice invoice-step1">
            <form method="post" onSubmit={handleSubmit}>
                <label className="delivery-address-label">
                    Delivery address
                </label>
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
                <Button type="submit" className="btn--green">
                    Next
                </Button>
            </form>
        </StyledContainer>
    );
};

InvoiceStep1.propTypes = {
    advanceInvoiceStep: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    advanceInvoiceStep: (address) => dispatch(advanceInvoiceStep(address)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceStep1);
