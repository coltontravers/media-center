import styled from "styled-components";

export const StyledText = styled.p`
    font-size: ${({ size, sizes }) =>
        sizes.find((currentSize) => currentSize.name === size)};
    font-weight: ${({ weight, weights }) =>
        weights.find((currentWeight) => currentWeight.name === weight)};
    color: ${({ color }) => color};
`;
