import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import dataReducer from "./reducers/data";
import cartReducer from "./reducers/cart";

const store = createStore(
    compose(combineReducers({ data: dataReducer, cart: cartReducer })),
    applyMiddleware(thunk)
);

export default store;
