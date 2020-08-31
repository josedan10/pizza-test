/* eslint-disable max-len */
import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";

import CardItem from "../utils/CardItem";
import { updateListItems } from "../redux/dispatchers";

const GridStyled = styled(Grid)`
    padding: 4rem;
    max-width: 1600px;
    margin: 0 auto !important;
`;

/**
 * Container where the items in the db are showed
 *
 * @class GridContainer
 * @extends {React.Component}
 */
class GridContainer extends React.Component {
    /**
     * Creates an instance of GridContainer.
     * @param {*} props
     * @memberof GridContainer
     */
    constructor(props) {
        super(props);
    }

    /**
     * Get the items list from db
     *
     * @memberof GridContainer
     */
    componentDidMount() {
        const _this = this;

        axios.get("/api/items").then((res) => {
            _this.props.updateListItems(res.data);
        });
    }

    /**
     * render the grid container
     *
     * @return {React.Component}
     * @memberof GridContainer
     */
    render() {
        const { pizzasList } = this.props;

        return (
            <GridStyled container spacing={10}>
                {pizzasList.map((pizza) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={"grid-item-" + pizza.id}
                    >
                        <CardItem itemData={pizza}></CardItem>
                    </Grid>
                ))}
            </GridStyled>
        );
    }
}

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
    updateListItems: PropTypes.func,
};

const mapStateToProps = (state) => ({
    pizzasList: state.data.pizzasList,
});

const mapDispatchToProps = (dispatch) => ({
    updateListItems: (ListItems) => dispatch(updateListItems(ListItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);
