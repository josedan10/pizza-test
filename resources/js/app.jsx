import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { ThemeProvider } from "styled-components";

import Nav from "./components/nav";
import StarredCarousel from "./components/starred-carousel";
import GridItems from "./components/grid-items";
import CartSideBar from "./components/cart-sidebar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import theme from "./theme";
import store from "./redux/store";

library.add(fab, fas);

const App = () => (
    <div>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Nav />
                <StarredCarousel />
                <GridItems />
                <CartSideBar />
            </ThemeProvider>
        </Provider>
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

require("./bootstrap");
