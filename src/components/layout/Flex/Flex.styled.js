import styled from "styled-components";

export const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: ${({ alignItems }) => alignItems};
    align-content: ${({ alignContent }) => alignContent};
    flex-wrap: ${({ wrap }) => wrap};
`;
