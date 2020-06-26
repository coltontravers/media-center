import React, { FunctionComponent } from "react";
import BadgeTypes, { defaultProps } from "./badgeTypes";
import { StyledBadge } from "./Badge.styled";

const Badge: FunctionComponent<BadgeTypes> = ({ label, ...restProps }) => {
    return (
        <StyledBadge {...restProps}>
            <span>{label}</span>
        </StyledBadge>
    );
};

Badge.defaultProps = defaultProps;

export default Badge;
