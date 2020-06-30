import styled from "styled-components";
import { SearchProps } from "./searchTypes";
import gutters from "../../../constants/gutters";

export const StyledSearch = styled.div<SearchProps>`
    display: inline-block;
    position: relative;

    ${({ iconPlacement }) =>
        iconPlacement === "left"
            ? `
                svg {left: ${gutters.oneThird};}
                input {
                    padding-left: calc(${gutters.full} + ${gutters.oneThird});
                }
                `
            : `svg {right: ${gutters.oneThird}};
                input {
                    padding-right: calc(${gutters.full} + ${gutters.oneThird});
                }
    `};
    width: ${({ fullWidth, width }) => (fullWidth ? "100%" : width || "")};

    svg {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }
`;
