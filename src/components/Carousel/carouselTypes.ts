import { Settings } from "react-slick";

export default interface CarouselTypes extends Settings {
    slideSpacing?: string;
}

export const defaultProps: CarouselTypes = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
};
