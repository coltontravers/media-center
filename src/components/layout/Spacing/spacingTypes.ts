import { ReactNode } from "react";
import gutters from "../../../constants/gutters";

export default interface SpacingTypes {
    m?: keyof typeof gutters; // margin
    mt?: keyof typeof gutters; // margin top
    mr?: keyof typeof gutters; // margin right
    mb?: keyof typeof gutters; // margin bottom
    ml?: keyof typeof gutters; // margin left
    mx?: keyof typeof gutters; // margin left + right
    my?: keyof typeof gutters; // margin top + bottom
    p?: keyof typeof gutters; // padding
    pt?: keyof typeof gutters; // padding top
    pr?: keyof typeof gutters; // padding right
    pb?: keyof typeof gutters; // padding bottom
    pl?: keyof typeof gutters; // padding left
    px?: keyof typeof gutters; // padding left + right
    py?: keyof typeof gutters; // padding top + bottom
    children: ReactNode;
}

export const defaultProps: SpacingTypes = {
    m: "half",
    children: null
};
