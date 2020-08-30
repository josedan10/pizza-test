import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AppBar, Grid } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import { formatPrice } from "../helperFunctions/price";

const StyledNav = styled(AppBar)`
    && {
        width: 100%;
        background: ${(props) => props.theme.red};
        height: 100px;
        padding: 5px 50px;
        color: ${(props) => props.theme.white};
    }

    .nav-container {
        height: 100%;
    }

    .brand-icon {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 80px;
        }
    }

    .bar-tools {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 1.25rem;

        .amount {
            font-weight: bold;
            font-size: 1.5rem;
            display: inline-block;
            margin-left: 10px;
        }
    }

    // Responsive
    @media only screen and (max-width: 600px) {
        && {
            padding: 5px;
        }
    }
`;

/**
 * NavBar of the main app
 *
 * @return {NavBarComponent}
 */
const NavBar = ({ totalAmount, currency, cart }) => (
    <StyledNav position="fixed">
        <Grid
            className="nav-container"
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Grid item xs={4}>
                Nombre de pizzería
            </Grid>
            <Grid item xs={4} className="brand-icon">
                <img src="/images/icon.png" alt="pizzeria brand icon" />
            </Grid>
            <Grid className="bar-tools" item xs={4}>
                Total:{" "}
                <span className="amount">
                    {formatPrice(totalAmount, currency)}
                </span>
            </Grid>
        </Grid>
    </StyledNav>
);

NavBar.propTypes = {
    totalAmount: PropTypes.number,
    currency: PropTypes.string,
    cart: PropTypes.object,
};

const mapStateToProps = (state) => ({
    totalAmount: state.cart.totalAmount,
    currency: state.data.currency,
    cart: state.cart,
});

export default connect(mapStateToProps)(NavBar);
