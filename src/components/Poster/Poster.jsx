import React from "react";
import PropTypes from "prop-types";
import {
    StyledPoster,
    StyledBackground,
    StyledBackgroundWrapper
} from "./Poster.styled";

const Poster = ({ expanded, metadata }) => {
    const { title, poster } = metadata;

    return (
        <StyledPoster expanded={expanded}>
            <StyledBackgroundWrapper>
                <StyledBackground poster={poster} />
            </StyledBackgroundWrapper>
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
