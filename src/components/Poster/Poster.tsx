import React, { FunctionComponent, useState } from "react";
import Heading from "../typography/Heading/Heading";
import Text from "../typography/Text/Text";
import PosterTypes, { defaultProps } from "./posterTypes";
import {
    StyledPoster,
    StyledBackgroundWrapper,
    StyledBackground,
    StyledMetadata,
    StyledPosterWrapper
} from "./Poster.styled";
import debounce from "../../helpers/debounce";

const handleMouseEnter = debounce(
    (
        setIsExpanded: (
            value: React.SetStateAction<boolean | undefined>
        ) => void,
        inGrid: boolean
    ) => inGrid && setIsExpanded(true),
    300
);

const handleMouseLeave = (
    setIsExpanded: (value: React.SetStateAction<boolean | undefined>) => void,
    inGrid: boolean
) => inGrid && setIsExpanded(false);

const Poster: FunctionComponent<PosterTypes> = ({
    expanded,
    expandedBgColor,
    metadata,
    width,
    inGrid = false
}) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    if (!metadata) {
        return null;
    }

    const { title, overview, poster, expandedBackground } = metadata;

    return (
        <StyledPosterWrapper expanded={isExpanded} width={width}>
            <StyledPoster
                expanded={isExpanded}
                inGrid={inGrid}
                expandedBgColor={expandedBgColor}
                onMouseEnter={() => handleMouseEnter(setIsExpanded, inGrid)}
                onMouseLeave={() => handleMouseLeave(setIsExpanded, inGrid)}
            >
                {/* <StyledBackgroundWrapper>
                <StyledBackground poster={poster} expanded={expanded} />
            </StyledBackgroundWrapper> */}
                <StyledBackgroundWrapper>
                    <StyledBackground
                        src={isExpanded ? expandedBackground : poster}
                    />
                </StyledBackgroundWrapper>
                <StyledMetadata expanded={isExpanded} inGrid={inGrid}>
                    <Heading color="white" weight="bold">
                        {title}
                    </Heading>
                    <Text color="white">{overview}</Text>
                </StyledMetadata>
            </StyledPoster>

            {/* {isExpanded && (
                <StyledMoreInfo>
                    <div>HERE!</div>
                </StyledMoreInfo>
            )} */}
        </StyledPosterWrapper>
    );
};

Poster.defaultProps = defaultProps;

export default Poster;
