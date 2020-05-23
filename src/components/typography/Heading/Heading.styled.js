import React from "react";
import styled from "styled-components";

export const StyledHeading = styled(({ component, ...props }) =>
    React.cloneElement(component, props)
)`
    font-weight: ${({ weight }) => weight};
    color: ${({ color }) => color};
    margin: 0;
`;
