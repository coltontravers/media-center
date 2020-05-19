import React from "react";
import PropTypes from "prop-types";
import { StyledCarousel } from "./Carousel.styled";

const Carousel = ({ children, slideSpacing, ...restProps }) => {
    return (
        <StyledCarousel slideSpacing={slideSpacing} {...restProps}>
            {children}
        </StyledCarousel>
    );
};

Carousel.propTypes = {
    slideSpacing: PropTypes.string,
    dots: PropTypes.bool,
    arrows: PropTypes.bool,
    infinite: PropTypes.bool,
    speed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
    autoplay: PropTypes.bool,
    children: PropTypes.node.isRequired
};

Carousel.defaultProps = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
};

export default Carousel;
