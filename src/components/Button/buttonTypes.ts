import { ReactNode } from "react";
import { buttonSizes, buttonThemes } from "../../constants/button";
import { colorsTypesWithString } from "../../constants/colors";

export default interface ButtonTypes {
    isLoading?: boolean;
    width?: string;
    minWidth?: string | false;
    size?: keyof typeof buttonSizes;
    theme?: keyof typeof buttonThemes;
    background?: colorsTypesWithString;
    color?: colorsTypesWithString;
    fullWidth?: boolean;
    disabled?: boolean;
    round?: boolean;
    children: ReactNode;
}

export const defaultProps: ButtonTypes = {
    isLoading: false,
    width: "auto",
    size: "normal",
    theme: "normal",
    color: "white",
    fullWidth: false,
    disabled: false,
    round: false,
    children: null
};
