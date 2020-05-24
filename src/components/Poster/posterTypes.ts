import { colorsTypesWithString } from "../../constants/colors";

export interface Imetadata {
    title: string;
    overview: string;
    poster: string;
    expandedBackground: string;
}

export default interface PosterTypes {
    metadata: Imetadata;
    expanded?: boolean;
    expandedBgColor?: colorsTypesWithString;
    width?: string;
    inGrid?: boolean;
}

export const defaultProps: PosterTypes = {
    expanded: false,
    expandedBgColor: "black",
    width: "auto",
    metadata: {
        title: "",
        overview: "",
        poster: "",
        expandedBackground: ""
    },
    inGrid: false
};
