import React from "react";

import StarredCarousel from "../components/starred-carousel";
import GridItems from "../components/grid-items";
import CartSideBar from "../components/cart-sidebar";

const Home = () => (
    <div className="home">
        <StarredCarousel />
        <GridItems />
        <CartSideBar />
    </div>
);

export default Home;
