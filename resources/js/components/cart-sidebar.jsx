import React, { useState } from "react";
import { List } from "@material-ui/core";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import formatPrice from "../helperFunctions/formatPrice";
import Button from "../utils/Button";

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
        z-index: 100;
    }

    &.opened {
        transition: all 0.3s ease;
        transform: translateX(0);
    }
`;

const StyledList = styled(List)``;

const StyledActions = styled.div`
    position: absolute;
    height: 212px;
    width: 100%;
    bottom: 0;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
    padding: 18px 30px;

    .cart-amount {
        color: ${(props) => props.theme.red};
        font-size: 3rem;
        font-weight: bold;
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

const sideBarCart = () => {
    const amount = 39.98;
    const [openCart, setOpenCart] = useState(false);

    return (
        <React.Fragment>
            <SideBarClick
                onClick={() => setOpenCart(false)}
                className={`sideBarEventHandler ${openCart && "opened"}`}
            />
            <StyledSideBar className={openCart && "opened"}>
                <StyledList></StyledList>
                <StyledActions>
                    <div className="cart-amount">
                        Total: {formatPrice(amount)}
                    </div>
                    <Button variant="contained" className="btn--green">
                        <FontAwesomeIcon
                            icon={["fas", "money-bill-wave"]}
                            className="cart-btn-icon"
                        ></FontAwesomeIcon>
                        Buy
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

export default sideBarCart;