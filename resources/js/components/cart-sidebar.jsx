import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatPrice } from "../helperFunctions/price";
import Button from "../utils/Button";
import CartItem from "../utils/CartItem";

const StyledSideBar = styled.div`
    && {
        position: fixed;
        right: 0;
        top: 100px;
        height: calc(100vh - 100px);
        width: 508px;
        background-color: rgba(246, 246, 246, 0.7);
        transform: translateX(100%);
        transition: all 0.3s ease;
        z-index: 50;

        @media (max-width: 700px) {
            width: 100vw;
        } 
    }

    &.opened {
        transition: all 0.3s ease;
        transform: translateX(0);
    }
`;

const StyledList = styled(List)`
    && {
        overflow-y: auto;
        padding: 28px 28px 240px;
        box-sizing: border-box;
        height: 100%;
    }
`;

const StyledActions = styled.div`
    position: absolute;
    z-index: 50;
    height: 212px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
    padding: 18px 30px;

    .cart-amount {
        color: ${(props) => props.theme.red};
        font-size: 3rem;
        font-weight: bold;

        @media (max-width: 700px) {
            font-size: 2.125rem;
        }
    }

    .cart-btn-icon {
        margin-right: 2rem;
        font-weight: normal;
    }

    .btn--green {
        width: 100%;
        margin-top: 36px;
        font-size: 2.25rem;
    }

    .close-btn {
        color: ${(props) => props.theme.red};
        display: block;
        tex-align: center;
        width: 100%;
    }
`;

const StyledCartButton = styled(Button)`
    && {
        position: fixed;
        bottom: 3rem;
        right: 3rem;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

        @media (max-width: 700px) {
            right: 1rem;
            bottom: 1rem;
        }
    }
`;

const SideBarClick = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    position: fixed;
    right: 0;
    top: 100px;
    transform: translateX(100%);

    &.opened {
        transform: translateX(0);
    }
`;

const sideBarCart = ({ listItems, currency, totalAmount }) => {
    const [openCart, setOpenCart] = useState(false);

    return (
        <React.Fragment>
            <SideBarClick
                onClick={() => setOpenCart(false)}
                className={`sideBarEventHandler ${openCart && "opened"}`}
            />
            <StyledSideBar className={openCart && "opened"}>
                <StyledList>
                    {listItems.map((cartItem, ind) => (
                        <CartItem
                            key={"cart-item-" + ind}
                            orderData={{ ...cartItem }}
                            cartIndex={ind}
                        />
                    ))}
                </StyledList>
                <StyledActions>
                    <div className="cart-amount">
                        Total: {formatPrice(totalAmount, currency)}
                    </div>
                    <Link className="link-nodecorate" to="/invoice">
                        <Button variant="contained" className="btn--green">
                            <FontAwesomeIcon
                                icon={["fas", "money-bill-wave"]}
                                className="cart-btn-icon"
                            ></FontAwesomeIcon>
                            Buy
                        </Button>
                    </Link>
                    <Button
                        onClick={() => setOpenCart(false)}
                        className="close-btn"
                    >
                        Close
                    </Button>
                </StyledActions>
            </StyledSideBar>
            <StyledCartButton
                onClick={() => setOpenCart(true)}
                className="open-cart-btn btn--red"
            >
                <FontAwesomeIcon
                    className="cart-icon"
                    variant="contained"
                    size="2x"
                    icon={["fab", "opencart"]}
                ></FontAwesomeIcon>
            </StyledCartButton>
        </React.Fragment>
    );
};

sideBarCart.propTypes = {
    listItems: PropTypes.array,
    currency: PropTypes.string,
    totalAmount: PropTypes.number,
};

const mapStateToProps = (state) => ({
    listItems: state.cart.listItems,
    currency: state.data.currency,
    totalAmount: state.cart.totalAmount,
});

export default connect(mapStateToProps)(sideBarCart);
