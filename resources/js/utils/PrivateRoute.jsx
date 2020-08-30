import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, listItems, ...rest }) => {
    console.log(listItems);
    return (
        <Route
            {...rest}
            render={() =>
                listItems.length > 0 ? children : <Redirect to="/" />
            }
        />
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.object,
    listItems: PropTypes.array,
};

const mapStateToProps = (state) => ({
    listItems: state.cart.listItems,
});

export default connect(mapStateToProps)(PrivateRoute);
