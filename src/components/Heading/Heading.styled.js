import React from "react";
import styled from "styled-components";

export const StyledHeading = styled(({ component, ...props }) =>
    React.cloneElement(component, props)
)`
    font-weight: ${({ weight }) => (weight === "normal" ? "normal" : "bold")};
    color: ${({ color }) => color};
`;
