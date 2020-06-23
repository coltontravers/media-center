import React, { FunctionComponent, useState, useEffect } from "react";
import Heading from "../typography/Heading/Heading";
import Text from "../typography/Text/Text";
import PosterTypes, { defaultProps } from "./posterTypes";
import {
    StyledPosterContainer,
    StyledPosterWrapper,
    StyledMetadata,
    StyledPoster
} from "./Poster.styled";

const Poster: FunctionComponent<PosterTypes> = ({
    expanded,
    metadata,
    width,
    fullWidth
}) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    if (!metadata) {
        return null;
    }

    const { title, overview, poster, expandedBackground } = metadata;

    useEffect(() => {
        setIsExpanded(expanded);
    }, [expanded]);

    return (
        <StyledPosterWrapper
            expanded={isExpanded}
            width={width}
            fullWidth={fullWidth}
        >
            <StyledPosterContainer expanded={isExpanded}>
                <StyledPoster>
                    <img
                        src={expanded ? expandedBackground : poster}
                        alt="test"
                    />

                    <StyledMetadata>
                        <Heading>{title}</Heading>
                        <Text>{overview}</Text>
                    </StyledMetadata>
                </StyledPoster>
            </StyledPosterContainer>
        </StyledPosterWrapper>
    );
};

Poster.defaultProps = defaultProps;

export default Poster;
