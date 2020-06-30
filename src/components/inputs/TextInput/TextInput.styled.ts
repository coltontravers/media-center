import styled from "styled-components";
import colors from "../../../constants/colors";
import { TextInputProps } from "./textInputTypes";
import splitColorKeys from "../../../helpers/splitColorKeys";
import fontSizes from "../../../constants/typography";
import gutters from "../../../constants/gutters";

export const StyledTextInput = styled.input<TextInputProps>`
    ${({ background, color, width, fullWidth, padding, fontSize, round }) => `
        background: ${background ? splitColorKeys(background) : ""};
        color: ${color ? splitColorKeys(color) : ""};
        width: ${fullWidth ? "100%" : width || ""};
        padding: ${padding ? gutters[padding] : ""};
        font-size: ${fontSize ? fontSizes[fontSize] : ""};
        border-radius: ${round ? "10px" : ""};
    `}

    border-color: ${colors.gray.normal};

    :focus {
        outline: none;
        box-shadow: 0px 0px 4px 2px ${colors.gray.light};
    }
`;
