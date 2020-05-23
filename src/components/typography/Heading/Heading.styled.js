import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { fontSizes, fontWeights } from "../../../constants/typography";

export const StyledHeading = styled(({ component, ...props }) =>
    React.cloneElement(component, props)
)`
    font-size: ${({ size }) => fontSizes[size]};
    font-weight: ${({ weight }) => fontWeights[weight]};
    color: ${({ color }) => color};
    ${({ outline, color }) =>
        outline &&
        `
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${darken(0.3, color)};
    `};
    margin: 0;
`;
