import styled from "styled-components";
import gutters from "../../../constants/gutters";
import SpacingTypes from "./spacingTypes";

const generateSpacing = (
    y: SpacingTypes["my"],
    x: SpacingTypes["mx"],
    t: SpacingTypes["mt"],
    r: SpacingTypes["mr"],
    b: SpacingTypes["mb"],
    l: SpacingTypes["ml"],
    all: SpacingTypes["m"]
): string | undefined => {
    if (y) {
        return `${gutters[y]} 0`;
    }

    if (x) {
        return `0 ${gutters[x]}`;
    }

    if (t) {
        return `${gutters[t]} 0 0 0`;
    }

    if (r) {
        return `0 ${gutters[r]} 0 0`;
    }

    if (b) {
        return `0 0 ${gutters[b]} 0`;
    }

    if (l) {
        return `0 0 0 ${gutters[l]}`;
    }

    return all && gutters[all];
};

export const StyledSpacing = styled.div<SpacingTypes>`
    margin: ${({ m, my, mx, mt, mr, ml, mb }) =>
        generateSpacing(my, mx, mt, mr, mb, ml, m)};
    padding: ${({ py, px, pt, pr, pb, pl, p }) =>
        generateSpacing(py, px, pt, pr, pb, pl, p)};
`;
