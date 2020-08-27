/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import Button from "../utils/Button";

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

const CarouselItem = styled.div`
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

export default () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const carouselItems = [
        {
            id: 1,
            title: "Pichinolli Especial",
            content:
                "Anim id proident sit ullamco laboris minim ipsum ullamco enim cillum. Laborum ut magna fugiat veniam cupidatat tempor qui consectetur. Veniam excepteur elit enim amet reprehenderit nostrud laboris elit mollit velit cupidatat aliqua incididunt. Velit ullamco officia dolore esse ad enim sunt eiusmod labore minim. Ullamco reprehenderit pariatur veniam cillum ipsum labore magna est.",
            linkURL: "#",
            linkCaption: "¡LO QUIERO YA!",
            image: "/images/starredPosts/pizzaBg1.jpg",
        },
        {
            id: 2,
            title: "Title 2",
            content:
                "Duis magna et irure proident ea aliqua aliqua culpa proident est velit laboris laboris velit. Sunt excepteur in incididunt ullamco cillum aute ut. Incididunt nulla eu sit Lorem incididunt.",
            linkURL: "#",
            linkCaption: "¡LO QUIERO YA!",
            image: "/images/starredPosts/pizzaBg2.jpg",
        },
    ];

    return (
        <StyledCarousel>
            <Slider {...settings}>
                {carouselItems.map((item) => (
                    <CarouselItem
                        key={item.id + item.linkURL}
                        image={item.image}
                    >
                        <div className="text">
                            <h1 className="item-title">{item.title}</h1>
                            <div className="content">{item.content}</div>
                            <Button
                                variant="contained"
                                className="btn--green carousel-btn"
                            >
                                {item.linkCaption}
                            </Button>
                        </div>
                    </CarouselItem>
                ))}
            </Slider>
        </StyledCarousel>
    );
};
