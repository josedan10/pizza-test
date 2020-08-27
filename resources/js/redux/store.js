import { createStore, compose } from "redux";

// Reducers
import reducer from "./reducer";

const store = createStore(compose(reducer));

export default store;
