import { colorsTypesWithString } from "../../constants/colors";

export interface Imetadata {
    title: string;
    overview: string;
    poster: string;
    expandedBackground: string;
}

export default interface PosterTypes {
    metadata?: Imetadata;
    expanded?: boolean;
    expandedBgColor?: colorsTypesWithString;
    width?: string;
    fullWidth?: boolean;
}

export const defaultProps: PosterTypes = {
    expanded: false,
    expandedBgColor: "black",
    width: "15%",
    metadata: {
        title: "",
        overview: "",
        poster: "",
        expandedBackground: ""
    },
    fullWidth: false
};
