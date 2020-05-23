/* eslint-disable consistent-return */
import styled from "styled-components";

const generateSpacing = (y, x, t, r, b, l, all) => {
    if (y) {
        return `${y} 0`;
    }

    if (x) {
        return `0 ${x}`;
    }

    if (t) {
        return `${t} 0 0 0`;
    }

    if (r) {
        return `0 ${r} 0 0`;
    }

    if (b) {
        return `0 0 ${b} 0`;
    }

    if (l) {
        return `0 0 0 ${l}`;
    }

    return all;
};

export const StyledSpacing = styled.div`
    margin: ${({ m, my, mx, mt, mr, ml, mb }) =>
        generateSpacing(my, mx, mt, mr, mb, ml, m)};
    padding: ${({ py, px, pt, pr, pb, pl, p }) =>
        generateSpacing(py, px, pt, pr, pb, pl, p)};
`;
