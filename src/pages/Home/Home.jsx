import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Poster from "../../components/Poster/Poster";
import Heading from "../../components/typography/Heading/Heading";
import { fontWeights } from "../../constants/typography";
import colors from "../../constants/colors";
import gutters from "../../constants/gutters";
import Spacing from "../../components/layout/Spacing/Spacing";

const mediaData = {
    title: "I Am Legend",
    poster:
        "https://image.tmdb.org/t/p/original/2ibBdwCvmKu0wRiO6Yanlj8tUk9.jpg",
    expandedBackground:
        "https://image.tmdb.org/t/p/original/xHWB9SdYRFV3nw1O0iL6GTedQQY.jpg",
    overview:
        "Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone."
};

const responsiveSettings = [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
];

export const Home = () => {
    return (
        <>
            <Spacing mb={gutters.double}>
                <Spacing my={gutters.half}>
                    <Heading level="h5" color={colors.gray.normal} outline>
                        On deck
                    </Heading>
                </Spacing>

                <Carousel
                    slidesToShow={5}
                    slidesToScroll={5}
                    infinite={false}
                    rows={1}
                    adaptiveHeight
                    adaptiveWidth
                    slideSpacing="20px"
                    responsive={responsiveSettings}
                >
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                </Carousel>
            </Spacing>

            <Spacing mb={gutters.double}>
                <Spacing my={gutters.half}>
                    <Heading
                        level="h5"
                        weight={fontWeights.bold}
                        color={colors.gray.normal}
                    >
                        Recently Added - Movies
                    </Heading>
                </Spacing>

                <Carousel
                    slidesToShow={5}
                    slidesToScroll={5}
                    infinite={false}
                    rows={1}
                    adaptiveHeight
                    adaptiveWidth
                    slideSpacing="20px"
                >
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                    <Poster
                        expanded={false}
                        inGrid={false}
                        metadata={mediaData}
                    />
                </Carousel>
            </Spacing>
        </>
    );
};

export default Home;
