import styled from "styled-components";
import posterTypes from "./posterTypes";

export const StyledMetadata = styled.div`
    display: none;
    width: 50%;
`;

export const StyledPosterWrapper = styled.div<posterTypes>`
    width: ${({ width, fullWidth }) => (fullWidth ? "100%" : width)};
    ${({ expanded, width, fullWidth }) =>
        expanded &&
        width &&
        `
        width: calc(${fullWidth ? "100%" : width} + 30%);

            ${StyledMetadata} {
                display: block;
            }
            `}
`;

export const StyledPosterContainer = styled.div<posterTypes>`
    padding-top: calc(3 / 2 * 100%);
    position: relative;
    display: flex;
    height: 100%;
    overflow: hidden;

    img {
        width: 100%;
        object-fit: cover;
    }

    ${({ expanded }) =>
        expanded &&
        `
        padding-top: calc(1 / 2 * 100%);

            img {
                height: 100%;
                width: 50%;
            }
    `}
`;

export const StyledPoster = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;
