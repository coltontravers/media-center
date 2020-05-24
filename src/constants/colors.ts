import { lighten, darken } from "polished";

const defaultPrimaryColor = "#07689f";

const defaultSecondayColor = "#a2d5f2";

const defaultTertiaryColor = "#ff7e67";

const defaultGray = "#9b9b9b";

const defaultBorderColor = "#000000";

export const colors = {
    white: "#ffffff",
    black: "#000000",
    warning: "orange",
    success: "green",
    gray: {
        light: lighten(0.25, defaultGray),
        normal: defaultGray,
        dark: darken(0.25, defaultGray)
    },
    primary: {
        light: lighten(0.2, defaultPrimaryColor),
        normal: defaultPrimaryColor,
        dark: darken(0.2, defaultPrimaryColor)
    },
    secondary: {
        light: lighten(0.1, defaultSecondayColor),
        normal: defaultSecondayColor,
        dark: darken(0.1, defaultSecondayColor)
    },
    tertiary: {
        light: lighten(0.1, defaultTertiaryColor),
        normal: defaultTertiaryColor,
        dark: darken(0.1, defaultTertiaryColor)
    },
    borders: {
        light: lighten(0.5, defaultBorderColor),
        normal: lighten(0.2, defaultBorderColor),
        dark: defaultBorderColor
    }
};

export type colorsTypes =
    | "white"
    | "black"
    | "warning"
    | "success"
    | "gray.light"
    | "gray.normal"
    | "gray.dark"
    | "primary.light"
    | "primary.normal"
    | "primary.dark"
    | "secondary.light"
    | "secondary.normal"
    | "secondary.dark"
    | "tertiary.light"
    | "tertiary.normal"
    | "tertiary.dark"
    | "borders.light"
    | "borders.normal"
    | "borders.dark";

// This is to allow for autocomplete to have the color constants, while still allowing you to enter anything in a string.
type LiteralUnion<T extends U, U = string> = T | (U & { ignoreMe?: never });

export type colorsTypesWithString = LiteralUnion<colorsTypes>;

export default colors;
