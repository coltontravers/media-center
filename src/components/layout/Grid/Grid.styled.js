import styled from "styled-components";

export const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: ${({ columns }) => columns};
    grid-template-rows: ${({ rows }) => rows};
    grid-gap: ${({ gridGap }) => gridGap};
    justify-content: space-between;
    position: relative;
`;
