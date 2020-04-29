import styled from "styled-components";

export const StyledPoster = styled.div`
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;

    ${({ expanded }) => `
    width: ${expanded ? "35vw" : "20vw"};

    img {
        width: ${expanded ? "25%" : "100%"};
    }
    `}
`;

/* If using css background instead of img tag 

export const StyledBackgroundWrapper = styled.div`
    // padding-top: 39.25%;
    // padding-top: 149.25%;
    // padding-top: 150%;
    padding-top: calc(1500 / 1000 * 100%);
    position: relative;
    width: 100%;
    min-width: 120px;
`;

export const StyledBackground = styled.div`
    background: ${({ poster }) => `url(${poster})`};
    width: 100%;
    height: 100%;
    // padding-top: 110%;
    position: absolute;
    top: 0;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

*/

export const StyledBackground = styled.img`
    width: 100%;
`;

export const StyledMetadata = styled.p``;

export const StyledTitle = styled.div`
    font-weight: 600;
    font-size: 1rem;
`;

export const StyledOverview = styled.div`
    transition: all 0.3s ease-in-out;
`;
