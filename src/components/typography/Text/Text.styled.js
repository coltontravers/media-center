import styled from "styled-components";
import { darken } from "polished";
import { fontSizes, fontWeights } from "../../../constants/typography";
import splitColorKeys from "../../../helpers/splitColorKeys";

export const StyledText = styled.span`
    font-size: ${({ size }) => fontSizes[size]};
    font-weight: ${({ weight }) => fontWeights[weight]};
    text-overflow: ${({ truncate }) => truncate && "ellipsis"};
    color: ${({ color }) => splitColorKeys(color)};
    ${({ outline, color }) =>
        outline &&
        `
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${darken(0.3, splitColorKeys(color))};
    `};
    overflow: hidden;
    margin: 0;
`;
