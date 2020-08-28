import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import CardItem from "../utils/CardItem";

const EditModal = ({ order, pizzasList }) => {
    const [open, setOpen] = React.useState(true);
    const item = pizzasList.filter((pizza) => itemData.id === pizza.id)[0];

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <CardItem itemData={item} />
            </Fade>
        </Modal>
    );
};

EditModal.propTypes = {
    order: {
        id: PropTypes.number,
        size: PropTypes.number,
        total: PropTypes.number,
        quantity: PropTypes.number,
    },
    pizzasList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            qty: PropTypes.number,
            imgUrl: PropTypes.string,
            ingredients: PropTypes.string,
        })
    ),
    sizes: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state) => ({
    sizes: state.data.sizes,
    pizzasList: state.data.pizzasList,
});

export default connect(mapStateToProps)(EditModal);
