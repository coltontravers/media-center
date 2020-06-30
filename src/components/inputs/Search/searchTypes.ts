import { colorsTypesWithString } from "../../../constants/colors";
import { TextInputProps } from "../TextInput/textInputTypes";

export const iconPlacementOptions = ["left", "right"] as const;

export interface SearchProps extends TextInputProps {
    iconPlacement?: typeof iconPlacementOptions[number];
    iconColor?: colorsTypesWithString;
}

export const defaultProps: SearchProps = {
    iconPlacement: "left",
    iconColor: "black"
};
