import React from "react";
import PropTypes from "prop-types";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import {
    StyledPoster,
    StyledBackground,
    StyledMetadata
} from "./Poster.styled";

const Poster = ({ expanded, metadata }) => {
    const { title, overview, poster } = metadata;

    return (
        <StyledPoster expanded={expanded}>
            <StyledBackground src={poster} />
            {expanded && (
                <StyledMetadata>
                    <Heading>{title}</Heading>
                    <Text>{overview}</Text>
                </StyledMetadata>
            )}
        </StyledPoster>
    );
};

Poster.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    metadata: PropTypes.object.isRequired,
    expanded: PropTypes.bool
};

Poster.defaultProps = {
    expanded: false
};

export default Poster;
