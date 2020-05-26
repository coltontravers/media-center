import styled from "styled-components";
import Slider from "react-slick";
import CarouselTypes from "./carouselTypes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledCarousel = styled(Slider)<CarouselTypes>`
    .slick-slide {
        margin-left: ${({ slideSpacing }) => slideSpacing};
    }

    .slick-list [data-index="0"] {
        margin-left: 0;
    }
`;
