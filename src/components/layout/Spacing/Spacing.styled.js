import styled from "styled-components";
import gutters from "../../../constants/gutters";

const generateSpacing = (y, x, t, r, b, l, all) => {
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

    return gutters[all];
};

export const StyledSpacing = styled.div`
    margin: ${({ m, my, mx, mt, mr, ml, mb }) =>
        generateSpacing(my, mx, mt, mr, mb, ml, m)};
    padding: ${({ py, px, pt, pr, pb, pl, p }) =>
        generateSpacing(py, px, pt, pr, pb, pl, p)};
`;
