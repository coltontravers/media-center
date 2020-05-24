import React, { FunctionComponent } from "react";
import CarouselTypes, { defaultProps } from "./carouselTypes";
import { StyledCarousel } from "./Carousel.styled";

const Carousel: FunctionComponent<CarouselTypes> = ({
    children,
    slideSpacing,
    ...restProps
}) => {
    return (
        <StyledCarousel slideSpacing={slideSpacing} {...restProps}>
            {children}
        </StyledCarousel>
    );
};

Carousel.defaultProps = defaultProps;

export default Carousel;
