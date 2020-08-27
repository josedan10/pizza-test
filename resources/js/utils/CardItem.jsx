import React, { useState } from "react";
import {
    Card,
    CardMedia,
    CardActions,
    Typography,
    CardContent,
} from "@material-ui/core";

import PropTypes from "prop-types";

import Button from "./Button";

const CardItem = ({ data }) => {
    const [quantity, setQuantity] = useState(0);

    const addItem = () => setQuantity(quantity + 1);
    const substractItem = () => setQuantity(quantity >=0 && quantity - 1);

    return (
        <Card className="grid-item-card">
            <CardMedia
                className="card-item-img"
                image={data.img}
                title="Pizza Alt title"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {data.name}
                </Typography>
            </CardContent>

            <CardActions>
                <Button onClick={substractItem} size="small" color="primary">
                    -
                </Button>
                <div className="qty">{quantity}</div>
                <Button onClick={addItem} size="small" color="primary">
                    +
                </Button>
            </CardActions>
        </Card>
    );
};

CardItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        img: PropTypes.string,
        qty: PropTypes.number,
        price: PropTypes.number,
        ingredients: PropTypes.string,
    }),
};

export default CardItem;
