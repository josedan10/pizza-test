/* eslint-disable max-len */
import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";

import CardItem from "../utils/CardItem";

const GridStyled = styled(Grid)`
    padding: 4rem;
    max-width: 1600px;
    margin: 0 auto !important;
`;

const GridContainer = ({ pizzasList }) => {
    // const [isLoading, setLoading] = useState(false)

    return (
        <GridStyled container spacing={10}>
            {pizzasList.map((pizza) => (
                <Grid item xs={12} sm={6} md={4} key={"grid-item-" + pizza.id}>
                    <CardItem itemData={pizza}></CardItem>
                </Grid>
            ))}
        </GridStyled>
    );
};

GridContainer.propTypes = {
    pizzasList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            qty: PropTypes.number,
            imgUrl: PropTypes.string,
            ingredients: PropTypes.string,
        })
    ),
};

const mapStateToProps = (state) => ({
    pizzasList: state.data.pizzasList,
});

export default connect(mapStateToProps)(GridContainer);
