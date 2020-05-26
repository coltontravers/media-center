/* eslint-disable no-console */
import styled from "styled-components";
import { darken } from "polished";
import boxShadows from "../../constants/boxShadows";
import splitColorKeys from "../../helpers/splitColorKeys";
import { buttonThemes, buttonSizes } from "../../constants/button";
import ButtonTypes from "./buttonTypes";

export const StyledButton = styled.button<ButtonTypes>`
    ${({ size }) => buttonSizes[size as keyof typeof buttonSizes]};
    background: ${({ background, theme }) =>
        background ||
        buttonThemes[theme as keyof typeof buttonThemes].background};
    color: ${({ color }) => color && splitColorKeys(color)};
    width: ${({ fullWidth, width }) => (fullWidth ? "100%" : width)};
    min-width: ${({ minWidth }) => minWidth};
    border-radius: ${({ round }) => round && "25px"};
    border: none;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    -webkit-appearance: button;
    transition: all 0.15s ease-in-out;
    outline: none;

    :hover {
        cursor: pointer;
        background: ${({ background, theme, disabled }) =>
            !disabled &&
            background &&
            darken(
                0.05,
                background ||
                    buttonThemes[theme as keyof typeof buttonThemes].background
            )};
        box-shadow: ${boxShadows.normal.medium};
    }

    :disabled {
        filter: grayscale(70%);
        cursor: default;
        box-shadow: none;
    }
`;
