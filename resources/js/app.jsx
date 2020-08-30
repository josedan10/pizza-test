import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { ThemeProvider } from "styled-components";

import Nav from "./components/nav";
import Home from "./views/Home";
import Invoice from "./views/Invoice";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import theme from "./theme";
import store from "./redux/store";

library.add(fab, fas);

const App = () => (
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={theme}>
                <Nav />
                <Switch>
                    <Route exact path="/invoice">
                        <Invoice />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));

require("./bootstrap");
