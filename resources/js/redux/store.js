import { createStore, compose, combineReducers } from "redux";

// Reducers
import dataReducer from "./reducers/data";
import cartReducer from "./reducers/cart";

const store = createStore(
    compose(combineReducers({ data: dataReducer, cart: cartReducer }))
);

export default store;
