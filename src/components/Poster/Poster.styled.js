import styled from "styled-components";

export const StyledPoster = styled.div`
    display: flex;
    position: relative;
    width: 20vw;
`;

export const StyledBackgroundWrapper = styled.div`
    display: flex;
    padding-top: 149.25%;
    position: relative;
    width: 100%;
`;

export const StyledBackground = styled.div`
    background: ${({ poster }) => `url(${poster})`};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
