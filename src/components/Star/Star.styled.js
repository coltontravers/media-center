import styled from "styled-components";

export const StyledStar = styled.div`
postion: relative;

::after {
    content: "",
    position: absolute;
    top: 0;
    left: 0;
    background: yellow;
    width: ${({ filled }) => filled};
}
`;
