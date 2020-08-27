/* eslint-disable max-len */
import React from "react";
import { Grid } from "@material-ui/core";
import CardItem from "../utils/CardItem";

const GridContainer = () => {
    // const [isLoading, setLoading] = useState(false)

    const items = [
        {
            id: 1,
            qty: 1,
            price: 9.99,
            name: "Margarita",
            ingredients:
                "Aliquip sunt magna culpa non ut voluptate exercitation. Commodo dolor voluptate pariatur occaecat magna consequat consectetur labore labore est non id voluptate nulla. Nostrud labore qui adipisicing do aute ea adipisicing ad. Nisi mollit et pariatur veniam cupidatat sit tempor et consequat ut qui incididunt irure ut. Esse proident cupidatat et nulla est pariatur enim duis aliqua. Nisi ea ullamco dolor aute esse dolore nulla magna aliqua excepteur nostrud ipsum cupidatat officia. Duis amet labore Lorem consectetur ex non.",
            img: "/images/pizzas/pizza-margarita.jpg",
        },
        {
            id: 2,
            qty: 1,
            price: 11.95,
            name: "Special Pichinolli",
            ingredients:
                "Aliquip sunt magna culpa non ut voluptate exercitation. Commodo dolor voluptate pariatur occaecat magna consequat consectetur labore labore est non id voluptate nulla. Nostrud labore qui adipisicing do aute ea adipisicing ad. Nisi mollit et pariatur veniam cupidatat sit tempor et consequat ut qui incididunt irure ut. Esse proident cupidatat et nulla est pariatur enim duis aliqua. Nisi ea ullamco dolor aute esse dolore nulla magna aliqua excepteur nostrud ipsum cupidatat officia. Duis amet labore Lorem consectetur ex non.",
            img: "",
        },
        {
            id: 3,
            qty: 1,
            price: 7.89,
            name: "Hawaian",
            ingredients:
                "Aliquip sunt magna culpa non ut voluptate exercitation. Commodo dolor voluptate pariatur occaecat magna consequat consectetur labore labore est non id voluptate nulla. Nostrud labore qui adipisicing do aute ea adipisicing ad. Nisi mollit et pariatur veniam cupidatat sit tempor et consequat ut qui incididunt irure ut. Esse proident cupidatat et nulla est pariatur enim duis aliqua. Nisi ea ullamco dolor aute esse dolore nulla magna aliqua excepteur nostrud ipsum cupidatat officia. Duis amet labore Lorem consectetur ex non.",
            img: "",
        },
    ];

    return (
        <Grid container spacing={3}>
            {items.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={"grid-item-" + item.id}>
                    <CardItem data={item}></CardItem>
                </Grid>
            ))}
        </Grid>
    );
};

export default GridContainer;
