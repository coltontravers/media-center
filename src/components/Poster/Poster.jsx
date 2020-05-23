import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Heading from "../typography/Heading/Heading";
import Text from "../typography/Text/Text";
import {
    StyledPoster,
    StyledBackgroundWrapper,
    StyledBackground,
    StyledMetadata,
    StyledMoreInfo,
    StyledPosterWrapper
} from "./Poster.styled";
import colors from "../../constants/colors";
import debounce from "../../helpers/debounce";

const handleMouseEnter = debounce(
    (setIsExpanded, inGrid) => inGrid && setIsExpanded(true),
    300
);

const handleMouseLeave = (setIsExpanded, inGrid) =>
    inGrid && setIsExpanded(false);

const Poster = ({ expanded, expandedBgColor, metadata, width, inGrid }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);
    const { title, overview, poster, expandedBackground } = metadata;

    return (
        <StyledPosterWrapper
            expanded={isExpanded}
            width={width}
            inGrid={inGrid}
        >
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
                    <Heading color={colors.white} weight="bold">
                        {title}
                    </Heading>
                    <Text color={colors.white}>{overview}</Text>
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

// Should probably add a ratio prop. It can use that to determine the height/width of the poster then.
Poster.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    metadata: PropTypes.object.isRequired,
    expanded: PropTypes.bool,
    expandedBgColor: PropTypes.string,
    width: PropTypes.string
};

Poster.defaultProps = {
    expanded: false,
    expandedBgColor: colors.black,
    width: "auto"
};

export default Poster;
