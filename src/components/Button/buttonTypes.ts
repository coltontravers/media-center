import { ReactNode } from "react";
import { buttonSizes, buttonThemes } from "../../constants/button";
import { colorsTypesWithString } from "../../constants/colors";
import weights from "../../constants/weights";

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
    hoverShadow?: boolean;
    icon?: ReactNode;
    iconPlacement?: "left" | "right";
    weight?: keyof typeof weights;
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
    hoverShadow: true,
    iconPlacement: "left",
    weight: "normal",
    children: null
};
