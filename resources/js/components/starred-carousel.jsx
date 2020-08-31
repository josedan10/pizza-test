/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Slider from "react-slick";
import styled from "styled-components";
import axios from "axios";

import { updateStarredItems } from "../redux/dispatchers";

import CarouselItem from "../utils/CarouselItem";

const StyledCarousel = styled.div`
    width: 100vw;
    margin-top: 100px;

    .slick-dots {
        bottom: 20px;

        li {
            width: 100px;
            height: 10px;

            button {
                background-color: rgba(0, 0, 0, 0.4);
                border-radius: 10px;
                width: 100%;
                height: 7px;

                &::before {
                    display: none;
                }
            }

            &.slick-active {
                button {
                    background-color: ${(props) => props.theme.orange};
                }
            }
        }
    }
`;

/**
 * Starred items carousel
 *
 * @class Carousel
 * @extends {React.Component}
 */
class Carousel extends React.Component {
    /**
     *Creates an instance of Carousel.
     * @param {*} props
     * @memberof Carousel
     */
    constructor(props) {
        super(props);
        this.settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };
    }

    /**
     * fetch the starred items
     *
     * @memberof Carousel
     */
    componentDidMount() {
        const _this = this;

        axios
            .get("/api/items/starred")
            .then((res) => {
                _this.props.updateStarredItems(res.data);
            })
            .catch((err) => console.log(err));
    }

    /**
     *  Render the carousel
     *
     * @return {React.Component}
     * @memberof Carousel
     */
    render() {
        const { carouselItems } = this.props;

        return (
            <StyledCarousel>
                <Slider {...this.settings}>
                    {carouselItems.map((item) => (
                        <CarouselItem
                            item={item}
                            key={item.id + item.linkURL}
                        />
                    ))}
                </Slider>
            </StyledCarousel>
        );
    }
}

Carousel.propTypes = {
    carouselItems: PropTypes.array,
    updateStarredItems: PropTypes.func,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
    carouselItems: state.data.carouselItems,
});

const mapDispatchToProps = (dispatch) => ({
    updateStarredItems: (carouselItems) =>
        dispatch(updateStarredItems(carouselItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
