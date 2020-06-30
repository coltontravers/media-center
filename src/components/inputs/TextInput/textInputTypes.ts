import { HTMLAttributes } from "react";
import { colorsTypesWithString } from "../../../constants/colors";
import gutters from "../../../constants/gutters";
import fontSizes from "../../../constants/typography";

export interface TextInputProps
    extends Omit<HTMLAttributes<HTMLInputElement>, "width" | "color"> {
    background?: colorsTypesWithString;
    color?: colorsTypesWithString;
    width?: string;
    fullWidth?: boolean;
    padding?: keyof typeof gutters;
    fontSize?: keyof typeof fontSizes;
    placeholder?: string;
    round?: boolean;
    handleOnChange?: () => void;
    handleOnBlur?: () => void;
}

export const defaultProps: TextInputProps = {
    color: "black",
    width: "auto",
    fullWidth: false,
    padding: "oneThird",
    fontSize: "small"
};
