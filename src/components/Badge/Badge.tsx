import React, { FunctionComponent } from "react";
import BadgeTypes, { defaultProps } from "./badgeTypes";
import { StyledBadge } from "./Badge.styled";

const Carousel: FunctionComponent<BadgeTypes> = ({ label, ...restProps }) => {
    return (
        <StyledBadge {...restProps}>
            <span>{label}</span>
        </StyledBadge>
    );
};

Carousel.defaultProps = defaultProps;

export default Carousel;
