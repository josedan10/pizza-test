import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    AppBar,
    Grid,
    Select,
    InputLabel,
    FormControl,
} from "@material-ui/core";

import styled from "styled-components";
import { formatPrice } from "../helperFunctions/price";
import { setCurrency } from "../redux/dispatchers";

const StyledNav = styled(AppBar)`
    && {
        width: 100%;
        background: ${(props) => props.theme.red};
        height: 100px;
        padding: 5px 50px;
        color: ${(props) => props.theme.white};
    }

    .pizza-name {
        @media (max-width: 980px) {
            display: none;
        }
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

        @media (max-width: 980px) {
            justify-content: flex-start;
        }
    }

    .bar-tools {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.25rem;

        .amount {
            font-weight: bold;
            font-size: 1.5rem;
            display: inline-block;
            margin-left: 10px;
        }
    }

    .change-currency-select {
        min-width: 100px;
        
        .MuiInputBase-root {
            color: ${(props) => props.theme.orange};
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
const NavBar = ({ totalAmount, currency, cart, setCurrency }) => {
    const handleChange = ({ target }) => {
        setCurrency(target.value);
    };

    return (
        <StyledNav position="fixed">
            <Grid
                className="nav-container"
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item xs={4} className="pizza-name">
                    Nombre de pizzería
                </Grid>
                <Grid item xs={2} className="brand-icon">
                    <img src="/images/icon.png" alt="pizzeria brand icon" />
                </Grid>
                <Grid className="bar-tools" item xs={9} md={4}>
                    <FormControl
                        className="change-currency-select"
                        variant="outlined"
                    >
                        <InputLabel htmlFor="outlined-age-native-simple">
                            Currency
                        </InputLabel>
                        <Select
                            native
                            value={currency}
                            onChange={handleChange}
                            label="Currency"
                            inputProps={{
                                name: "Currency",
                                id: "outlined-age-native-simple",
                            }}
                        >
                            <option value={"USD"}>USD</option>
                            <option value={"EUR"}>EUR</option>
                        </Select>
                    </FormControl>
                    <div className="cart-amount">
                        Total:{" "}
                        <span className="amount">
                            {formatPrice(totalAmount, currency)}
                        </span>
                    </div>
                </Grid>
            </Grid>
        </StyledNav>
    );
};

NavBar.propTypes = {
    totalAmount: PropTypes.number,
    currency: PropTypes.string,
    cart: PropTypes.object,
    setCurrency: PropTypes.func,
};

const mapStateToProps = (state) => ({
    totalAmount: state.cart.totalAmount,
    currency: state.data.currency,
    cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrency: (value) => dispatch(setCurrency(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
