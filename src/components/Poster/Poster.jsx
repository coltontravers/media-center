import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
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

const handleMouseEnter = debounce((setIsExpanded) => {
    setIsExpanded(true);
}, 300);

const handleMouseLeave = (setIsExpanded) => setIsExpanded(false);

const Poster = ({ expanded, expandedBgColor, metadata }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);
    const { title, overview, poster, expandedBackground } = metadata;
    // const handleMouseEnter = debounce(setIsExpanded(true), 300);

    // const handleMouseLeave = setIsExpanded(false);

    return (
        <StyledPosterWrapper expanded={isExpanded}>
            <StyledPoster
                expanded={isExpanded}
                expandedBgColor={expandedBgColor}
                onMouseEnter={() => handleMouseEnter(setIsExpanded)}
                onMouseLeave={() => handleMouseLeave(setIsExpanded)}
            >
                {/* <StyledBackgroundWrapper>
                <StyledBackground poster={poster} expanded={expanded} />
            </StyledBackgroundWrapper> */}
                <StyledBackgroundWrapper>
                    <StyledBackground
                        src={isExpanded ? expandedBackground : poster}
                    />
                </StyledBackgroundWrapper>
                <StyledMetadata expanded={isExpanded}>
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
    expandedBgColor: PropTypes.string
};

Poster.defaultProps = {
    expanded: false,
    expandedBgColor: colors.black
};

export default Poster;
