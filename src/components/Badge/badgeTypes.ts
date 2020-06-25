import { colorsTypes } from "../../constants/colors";

export default interface BadgeTypes {
    label: string;
    backgroundColor?: colorsTypes;
    textColor?: colorsTypes;
}

export const defaultProps: Omit<BadgeTypes, "label"> = {
    backgroundColor: "primary.normal",
    textColor: "white"
};
