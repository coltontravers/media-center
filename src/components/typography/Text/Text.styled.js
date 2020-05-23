import styled from "styled-components";
import { fontSizes, fontWeights } from "../../../constants/typography";

export const StyledText = styled.span`
    font-size: ${({ size }) => fontSizes[size]};
    font-weight: ${({ weight }) => fontWeights[weight]};
    color: ${({ color }) => color};
    text-overflow: ${({ truncate }) => truncate && "ellipsis"};
    ${({ outline }) =>
        outline &&
        `
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #6b6b6b;
    `};
    overflow: hidden;
    margin: 0;
`;
