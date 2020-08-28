import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ListItem } from "@material-ui/core";
import styled from "styled-components";
import { Button as MButton } from "@material-ui/core";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { connect } from "react-redux";

import { formatPrice } from "../helperFunctions/price";

const StyledListItem = styled(ListItem)`
    && {
        display: flex;
        align-items: stretch;
        border-radius: 10px;
        width: 100%;
        background-color: ${(props) => props.theme.white};
        position: relative;
        padding: 0;
        margin-bottom: 34px;

        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    }

    .cart-item-data {
        padding: 15px;
        width: 70%;

        .cart-item-name {
            font-weight: bold;
            font-size: 1.625rem;
            color: ${(props) => props.theme.orange};
        }
    }

    .cart-item-description {
        margin-top: 13px;

        .cart-item-values {
            font-size: 1.125rem;

            &-value {
                font-weight: bold;
                color: ${(props) => props.theme.green};
            }
        }
    }

    .cart-item-price {
        color: ${(props) => props.theme.red};
        font-weight: bold;
        font-size: 1.75rem;
        text-align: right;
        margin-top: 1rem;
    }

    .cart-item-img {
        width: 30%;
        border-radius: 10px 0 0 10px;
        background-size: cover;
        background-image: url(${(props) => props["data-img"]});
    }

    .cart-item-options-btn {
        position: absolute;
        right: 0;
        top: 7px;
        color: ${(props) => props.theme.orange};

        &.hide {
            display: none;
        }
    }

    .cart-item-options-view {
        position: absolute;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.white};
        padding: 15px;
        opacity: 0;
        transition: all 0.2s ease;

        &.visible {
            opacity: 1;
            transition: all 0.2s ease;
        }

        .cart-item-actions-btn {
            height: 4rem;
            width: 4rem;
        }

        .cart-item-options-close {
            positit>on: absolute;
            right: 10px;
            top: 7px;
            color: ${(props) => props.theme.red};
        }
    }
`;

const CartItem = ({ itemData, sizes, pizzasList, currency }) => {
    const [showOptions, setShowOptions] = useState(false);
    const item = pizzasList.filter((pizza) => itemData.id === pizza.id)[0];

    return (
        <StyledListItem data-img={item.imgUrl}>
            <div
                className={`cart-item-options-view ${showOptions && "visible"}`}
            >
                <Button
                    variant="contained"
                    className="cart-item-actions-btn btn--orange"
                >
                    <FontAwesomeIcon size="2x" icon="edit" />
                </Button>
                <Button
                    variant="contained"
                    className="cart-item-actions-btn btn--green"
                >
                    <FontAwesomeIcon size="2x" icon="eye" />
                </Button>
                <Button
                    variant="contained"
                    className="cart-item-actions-btn btn--red"
                >
                    <FontAwesomeIcon size="2x" icon={["fas", "trash"]} />
                </Button>
                <MButton
                    onClick={() => setShowOptions(false)}
                    className="cart-item-options-close"
                >
                    Close
                </MButton>
            </div>
            <div className="cart-item-img" />
            <div className="cart-item-data">
                <div className="cart-item-name">{item.name}</div>
                <MButton
                    onClick={() => setShowOptions(true)}
                    className={`cart-item-options-btn ${showOptions && 'hide'}`}
                >
                    <FontAwesomeIcon size="2x" icon={["fas", "ellipsis-h"]} />
                </MButton>
                <div className="cart-item-description">
                    <div className="cart-item-values">
                        Size:{" "}
                        <span className="cart-item-values-value">
                            {sizes[itemData.size]}
                        </span>
                    </div>
                    <div className="cart-item-values">
                        Quantity:{" "}
                        <span className="cart-item-values-value">
                            {itemData.quantity}
                        </span>
                    </div>
                </div>
                <div className="cart-item-price">
                    {formatPrice(itemData.total, currency)}
                </div>
            </div>
        </StyledListItem>
    );
};

CartItem.propTypes = {
    itemData: PropTypes.shape({
        id: PropTypes.number,
        quantity: PropTypes.number,
        size: PropTypes.number,
        total: PropTypes.number,
    }),
    sizes: PropTypes.arrayOf(PropTypes.string),
    pizzasList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            ingredients: PropTypes.string,
            imgUrl: PropTypes.string,
            price: PropTypes.number,
        })
    ),
    currency: PropTypes.string,
};

const mapStateToProps = (state) => ({
    sizes: state.sizes,
    currency: state.currency,
    pizzasList: state.pizzasList,
});

export default connect(mapStateToProps)(CartItem);
