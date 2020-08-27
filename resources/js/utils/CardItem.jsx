import React, { useState } from "react";
import { connect } from "react-redux";
import {
    Card,
    CardMedia,
    CardActions,
    Typography,
    CardContent,
    Button,
    Select,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import styled, { withTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";

import CustomButton from "./Button";
import { priceCalculator, formatPrice } from "../helperFunctions/price";
import { addItemToCart } from "../redux/dispatchers";

const IconButtonStyled = styled(Button)`
    && {
        width: 5.625rem;
        height: 5.625rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme.green};
        border-radius: 50%;
        position: absolute;
        right: calc(-5.625rem / 3);
        top: calc(-5.625rem / 3);

        &:active,
        &:hover {
            background-color: ${(props) => props.theme.green};
            backdrop-filter: brightness(120%);
        }
    }
`;

const CardStyled = styled(Card)`
    && {
        position: relative;
        overflow: visible;
        border-radius: 0 0 15px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .card-item-img {
        height: 300px;
        width: 100%;
    }

    .card-item-name {
        position: absolute;
        top: -3.5rem;
        color: ${(props) => props.theme.orange};
        font-size: 1.875rem;
        font-weight: bold;
    }

    .card-item-content-wrapper {
        position: relative;
        width: 100%;

        .card-item-content-description {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: 0.5s ease all;
            background-color: rgba(0, 0, 0, 0.6);
            color: ${(props) => props.theme.orange};
            padding: 1.5rem;
            overflow-y: auto;
        }

        &:hover .card-item-content-description {
            opacity: 1;
            transition: 0.5s ease all;
        }
    }

    .card-item-actions {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
        padding: 0;
        height: 60px;
        font-size: 1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme.orange};
    }

    .btn--orange {
        width: 33.33%;
        border-radius: 0;
        height: 100%;
    }

    .select-input {
        height: 100%;
        width: 100%;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme.orange};

        .MuiSelect-icon {
            right: 2rem;
            fill: ${(props) => props.theme.orange};
        }

        .MuiSvgIcon-root {
            width: 2rem;
            height: 2rem;
        }
    }

    .card-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 2.25rem;
        background-color: ${(props) => props.theme.red};
        border-radius: 0 0 15px 15px;
        color: ${(props) => props.theme.white};
        padding: 13px 26px;
        font-family: "Montserrat", Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
`;

const CardItem = ({ itemData, theme, addItemToCart, currency }) => {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(0);
    const [total, setTotal] = useState(
        priceCalculator(itemData.price, quantity, size)
    );

    // Add or substract the quantity
    const addItem = () => {
        const newQty = quantity + 1;
        setQuantity(newQty);
        setTotal(priceCalculator(itemData.price, newQty, size));
    };

    const substractItem = () => {
        const newQty = quantity > 1 ? quantity - 1 : 1;
        setQuantity(newQty);
        setTotal(priceCalculator(itemData.price, newQty, size));
    };

    // Select item size
    const sizes = ["Small", "Medium", "Big", "Familiar"];
    const handleChangeSize = ({ target: { value } }) => {
        setSize(value);
        setTotal(priceCalculator(itemData.price, quantity, value));
    };

    return (
        <CardStyled className="card-item">
            <div className="card-item-content-wrapper">
                <CardMedia
                    height={275}
                    className="card-item-img"
                    image={itemData.imgUrl}
                    title="Pizza Alt title"
                />
                <CardContent className="card-item-content-description">
                    <Typography gutterBottom component="p">
                        {itemData.ingredients}
                    </Typography>
                </CardContent>
            </div>
            <Typography
                className="card-item-name"
                gutterBottom
                variant="h5"
                component="h2"
            >
                {itemData.name}
            </Typography>
            <IconButtonStyled
                onClick={() =>
                    addItemToCart({
                        id: itemData.id,
                        size,
                        quantity,
                        total,
                    })
                }
                variant="contained"
            >
                <FontAwesomeIcon
                    icon={["fas", "plus"]}
                    color={theme.white}
                    size="3x"
                />
            </IconButtonStyled>

            <CardActions className="card-item-actions">
                <Select
                    className="select-input"
                    native
                    value={size}
                    onChange={handleChangeSize}
                    IconComponent={ExpandMore}
                >
                    {sizes.map((opt, ind) => (
                        <option key={opt + ind} value={ind}>
                            {opt}
                        </option>
                    ))}
                </Select>
            </CardActions>

            <CardActions disableSpacing className="card-item-actions">
                <CustomButton
                    onClick={substractItem}
                    size="small"
                    variant="contained"
                    className="btn--orange"
                    disableElevation
                >
                    <FontAwesomeIcon icon={["fas", "minus"]} size="2x" />
                </CustomButton>
                <div className="qty">{quantity}</div>
                <CustomButton
                    onClick={addItem}
                    size="small"
                    variant="contained"
                    className="btn--orange"
                    disableElevation
                >
                    <FontAwesomeIcon icon={["fas", "plus"]} size="2x" />
                </CustomButton>
            </CardActions>
            <div className="card-footer">{formatPrice(total, currency)}</div>
        </CardStyled>
    );
};

CardItem.propTypes = {
    itemData: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        imgUrl: PropTypes.string,
        price: PropTypes.number,
        ingredients: PropTypes.string,
    }),
    theme: PropTypes.object,
    addItemToCart: PropTypes.func.isRequired,
    currency: PropTypes.string,
};

const mapStateToProps = (state) => ({
    currency: state.currency,
});
const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(CardItem));
