import { colorsTypes } from "../../constants/colors";
import { badgeThemes, badgePositions } from "../../constants/badge";

export default interface BadgeTypes {
    label: string;
    backgroundColor?: colorsTypes;
    textColor?: colorsTypes;
    theme?: keyof typeof badgeThemes;
    position?: keyof typeof badgePositions;
}

export const defaultProps: Omit<BadgeTypes, "label"> = {
    theme: "normal",
    position: "topRight"
};
