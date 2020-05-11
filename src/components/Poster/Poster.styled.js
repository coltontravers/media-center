import styled from "styled-components";

export const StyledBackgroundWrapper = styled.div`
    background: -webkit-linear-gradient(
        left,
        rgba(0, 0, 0, 0.65) 0%,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 0) 80%,
        rgba(0, 0, 0, 0.65) 100%
    );
    width: 100%;
    height: 100%;
`;

export const StyledPosterWrapper = styled.div`
    overflow: hidden;
    // padding-top: 40vh;
    padding-top: 150%;
    // width: 26.5vh;
    // width: 100%;
    // height: 40vh;
    // height: 60vh;
    // min-height: 200px;
    min-width: 150px;
    position: relative;

    ${({ expanded }) =>
        expanded &&
        `
        padding-top: 0;
        // grid-column: span 2/5;
        // width: auto;
    // width: 40vw;
    // grid-column: span 4 / 2;
    // grid-column: span 3;
    // max-width: 800px;
    // width: 100%;
    // min-width: 800px;
    // width: max-content;
    // grid-column: span 3;
    // grid-column: span 1 / 4;
    grid-column-end: span 3;
    grid-row-end: span 1;
    // grid-column-start: span -2;
    `}
`;

export const StyledPoster = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    align-items: center;
    overflow: hidden;
    height: 100%;
    background-color: ${({ expandedBgColor }) => expandedBgColor};
    width: 100%;
    cursor: pointer;
    transition: width .25s ease-in-out;

    ${({ expanded }) =>
        expanded &&
        `
        width: 100%;
    // max-width: 800px;

    ${StyledBackgroundWrapper} {
        width: 50%;
    }
    }
    `}

    span {
        --max-lines: 20;
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  padding-right: 1rem; /* space for ellipsis */
  right: 0;

  ::before {
    position: absolute;
    content: "...";
    /* tempting... but shows when lines == content */
    /* top: calc(var(--lh) * (var(--max-lines) - 1)); */
    
    /*
    inset-block-end: 0;
    inset-inline-end: 0;
    */
    bottom: 0;
    right: 0;
  }

  ::after {
    content: "";
    position: absolute;
    /*
    inset-inline-end: 0;
    */
    right: 0;
    /* missing bottom on purpose*/
    width: 1rem;
    height: 1rem;
    background: white;
  }
        }
    }
`;

export const StyledBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const StyledMetadata = styled.div`
    transform: scale(0);
    ${({ expanded }) => `
    ${
        expanded &&
        `
    transform: scale(1.0);
    `
    }
    visibility: ${expanded ? "visible" : "hidden"};
    // display: ${expanded ? "flex" : "none"};
    // transform: ${expanded ? "scale(1)" : "scale(0)"};
    padding: ${expanded ? "1em" : "0"};
    width: ${expanded ? "50%" : "0"};

    `}
    display: flex;
    --lh: 1.5rem;
    line-height: var(--lh);
    flex-direction: column;
    transition: transform 0.45s ease-in-out;
`;

export const StyledTitle = styled.div`
    font-weight: 600;
    font-size: 1rem;
`;

export const StyledOverview = styled.div``;

export const StyledMoreInfo = styled.div`
    height: 300px;

    > * {
        position: absolute;
        left: 0;
        width: 100%;
        height: 300px;
        background-color: red;
    }
`;
