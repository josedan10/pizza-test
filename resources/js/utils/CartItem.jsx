import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ListItem } from "@material-ui/core";
import styled from "styled-components";
import { Button as MButton, Modal, Backdrop, Fade } from "@material-ui/core";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatPrice } from "../helperFunctions/price";
import { showEditModal, hideEditModal } from "../redux/dispatchers";
import CardItem from "./CardItem";

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

const CartItem = ({
    orderData,
    sizes,
    pizzasList,
    currency,
    showEditModal,
    hideEditModal,
}) => {
    const [showOptions, setShowOptions] = useState(false);
    const item = pizzasList.filter((pizza) => orderData.itemId === pizza.id)[0];
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

        return (dispatch) => {
            dispatch(hideEditModal());
        };
    };

    return (
        <React.Fragment>
            <StyledListItem data-img={item.imgUrl}>
                <div
                    className={`cart-item-options-view ${
                        showOptions && "visible"
                    }`}
                >
                    <Button
                        variant="contained"
                        className="cart-item-actions-btn btn--orange"
                        onClick={() => {
                            showEditModal(orderData);
                            handleOpen();
                        }}
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
                        className={`cart-item-options-btn ${
                            showOptions && "hide"
                        }`}
                    >
                        <FontAwesomeIcon
                            size="2x"
                            icon={["fas", "ellipsis-h"]}
                        />
                    </MButton>
                    <div className="cart-item-description">
                        <div className="cart-item-values">
                            Size:{" "}
                            <span className="cart-item-values-value">
                                {sizes[orderData.size]}
                            </span>
                        </div>
                        <div className="cart-item-values">
                            Quantity:{" "}
                            <span className="cart-item-values-value">
                                {orderData.quantity}
                            </span>
                        </div>
                    </div>
                    <div className="cart-item-price">
                        {formatPrice(orderData.total, currency)}
                    </div>
                </div>
            </StyledListItem>

            {/* Edit Modal */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <CardItem
                        editCard={true}
                        orderData={orderData}
                        itemData={item}
                    />
                </Fade>
            </Modal>
        </React.Fragment>
    );
};

CartItem.propTypes = {
    orderData: PropTypes.shape({
        itemId: PropTypes.number,
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
    showEditModal: PropTypes.func,
    hideEditModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
    sizes: state.data.sizes,
    currency: state.data.currency,
    pizzasList: state.data.pizzasList,
});

const mapDispatchToProps = (dispatch) => ({
    showEditModal: (order) => dispatch(showEditModal(order)),
    hideEditModal: () => dispatch(hideEditModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
