import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "@material-ui/core";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { connect } from "react-redux";

import { priceCalculator } from "../helperFunctions/price";

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
        color: ${props => props.theme.red};
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
    }
`;

const CartItem = ({ itemData }) => {
    // getItemData from server
    const item = {
        name: "Margarita",
        imgUrl: "/images/pizzas/pizza-margarita.jpg",
        price: 9.99,
    };

    // Move this to store variables
    const sizes = ["Small", "Medium", "Big", "Familiar"];

    return (
        <StyledListItem data-img={item.imgUrl}>
            <div className="cart-item-img" />
            <div className="cart-item-data">
                <div className="cart-item-name">{item.name}</div>
                <Button className="cart-item-options-btn">
                    <FontAwesomeIcon size="2x" icon={["fas", "ellipsis-h"]} />
                </Button>
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
                    {priceCalculator(
                        item.price,
                        itemData.quantity,
                        itemData.size
                    )}
                </div>
            </div>
        </StyledListItem>
    );
};

CartItem.propTypes = {
    itemData: PropTypes.shape({
        id: PropTypes.number,
        quantity: PropTypes.number,
        size: PropTypes.string,
    }),
};

export default CartItem;
