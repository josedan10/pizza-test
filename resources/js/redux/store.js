import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import dataReducer from "./reducers/data";
import cartReducer from "./reducers/cart";
import invoiceReducer from "./reducers/invoice";

const store = createStore(
    compose(
        combineReducers({
            data: dataReducer,
            cart: cartReducer,
            invoice: invoiceReducer,
        })
    ),
    applyMiddleware(thunk)
);

export default store;
