import React from "react";
import PropTypes from "prop-types";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import {
    StyledPoster,
    StyledBackgroundWrapper,
    StyledBackground,
    StyledMetadata
} from "./Poster.styled";
import colors from "../../constants/colors";

const Poster = ({ expanded, expandedBgColor, metadata }) => {
    const { title, overview, poster, expandedBackground } = metadata;

    return (
        <StyledPoster expanded={expanded} expandedBgColor={expandedBgColor}>
            {/* <StyledBackgroundWrapper>
                <StyledBackground poster={poster} expanded={expanded} />
            </StyledBackgroundWrapper> */}
            <StyledBackgroundWrapper>
                <StyledBackground
                    src={expanded ? expandedBackground : poster}
                />
            </StyledBackgroundWrapper>
            {expanded && (
                <StyledMetadata>
                    <Heading color={colors.white} weight="bold">
                        {title}
                    </Heading>
                    <Text color={colors.white}>{overview}</Text>
                </StyledMetadata>
            )}
        </StyledPoster>
    );
};

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
