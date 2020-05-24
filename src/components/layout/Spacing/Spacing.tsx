import React, { FunctionComponent } from "react";
import SpacingTypes, { defaultProps } from "./spacingTypes";
import { StyledSpacing } from "./Spacing.styled";

// TODO: Add responsiveness by having an array of object with the breakpoint, and the new props.
export const Spacing: FunctionComponent<SpacingTypes> = ({
    m,
    children,
    ...restProps
}) => {
    return (
        <StyledSpacing m={m} {...restProps}>
            {children}
        </StyledSpacing>
    );
};

Spacing.defaultProps = defaultProps;

export default Spacing;
