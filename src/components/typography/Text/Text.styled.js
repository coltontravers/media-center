import styled from "styled-components";

export const StyledText = styled.span`
    font-size: ${({ size, sizes }) =>
        sizes.find((currentSize) => currentSize.name === size).value};
    font-weight: ${({ weight, weights }) =>
        weights.find((currentWeight) => currentWeight.name === weight).value};
    color: ${({ color }) => color};
    text-overflow: ${({ truncate }) => truncate && "ellipsis"};
    overflow: hidden;
    margin: 0;
`;
