import { colorsTypesWithString } from "../../constants/colors";

export default interface StarTypes {
    filled: number;
    fillColor: colorsTypesWithString;
    backgroundColor: colorsTypesWithString;
    size?: string;
}

export const defaultProps: StarTypes = {
    filled: 100,
    fillColor: "rgb(254, 229, 0)",
    backgroundColor: "rgb(237, 237, 237)"
};
