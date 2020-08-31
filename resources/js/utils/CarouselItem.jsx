import React from "react";
import { connect } from "react-redux";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";

import CardItem from "./CardItem";
import Button from "./Button";

import { showEditModal, hideEditModal } from "../redux/dispatchers";

const StyledModal = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .card-item {
        width: 400px;
    }
`;

const StyledCarouselItem = styled.div`
    max-height: 900px;
    height: 60vh;
    width: 100%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    color: white;
    display: inline-flex !important;
    align-items: center;
    padding: 0 50px;

    .text {
        max-width: 520px;
        position: relative;
        backdrop-filter: blur(10px) brightness(0.85);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

        .item-title {
            margin-bottom: 25px;
            font-size: 4rem;
            font-family: "Kaushan Script", cursive;
        }

        .content {
            font-size: 1.125rem;
        }

        .carousel-btn {
            margin-top: 50px;
            height: 63px;
            font-size: 1.5rem;
            width: 100%;
        }
    }
`;

const CarouselItem = ({ showModal, hideModal, item }) => {
    // Modal State
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

        return (dispatch) => {
            dispatch(hideModal());
        };
    };

    return (
        <React.Fragment>
            <StyledCarouselItem image={item.starred_img}>
                <div className="text">
                    <h1 className="item-title">{item.name}</h1>
                    <div className="content">{item.description}</div>
                    <Button
                        variant="contained"
                        className="btn--green carousel-btn"
                        onClick={() => {
                            showModal();
                            handleOpen();
                        }}
                    >
                        I Want One Now!
                    </Button>
                </div>
            </StyledCarouselItem>
            {/* Add item Modal */}
            <StyledModal
                className="edit-modal"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <CardItem handleClose={handleClose} itemData={item} />
                </Fade>
            </StyledModal>
        </React.Fragment>
    );
};

CarouselItem.propTypes = {
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    item: PropTypes.object,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    showModal: () => dispatch(showEditModal()),
    hideModal: () => dispatch(hideEditModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
