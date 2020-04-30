import styled from "styled-components";

export const StyledBackgroundWrapper = styled.div`
    background: -webkit-linear-gradient(
        left,
        rgba(0, 0, 0, 0.65) 0%,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 0) 80%,
        rgba(0, 0, 0, 0.65) 100%
    );
`;

export const StyledPoster = styled.div`
    display: flex;
    overflow: hidden;
    height: 60vh;
    background-color: ${({ expandedBgColor }) => expandedBgColor};
    // transition: width .2s ease-in;
    transition: width 1s ease-in-out;

    ${({ expanded }) => `
    width: ${
        expanded ? "40vw" : "40vh"
    }; // The vh is  to get the aspect ratio correct. There may be a better way.
    `}

    ${StyledBackgroundWrapper} {
        ${({ expanded }) => `
    width: ${expanded ? "50%" : "100%"};
    `}
    }

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
    --lh: 1.5rem;
    line-height: var(--lh);
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 1em;
`;

export const StyledTitle = styled.div`
    font-weight: 600;
    font-size: 1rem;
`;

export const StyledOverview = styled.div``;
