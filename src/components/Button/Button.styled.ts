/* eslint-disable no-console */
import styled from "styled-components";
import { darken } from "polished";
import boxShadows from "../../constants/boxShadows";
import splitColorKeys from "../../helpers/splitColorKeys";
import { buttonThemes, buttonSizes } from "../../constants/button";
import ButtonTypes from "./buttonTypes";
import gutters from "../../constants/gutters";
import weights from "../../constants/weights";

export const StyledButton = styled.button<ButtonTypes>`
    display: flex;
    ${({ size }) => buttonSizes[size as keyof typeof buttonSizes]};
    background: ${({ background, theme }) =>
        background ||
        buttonThemes[theme as keyof typeof buttonThemes].background};
    color: ${({ color }) => color && splitColorKeys(color)};
    width: ${({ fullWidth, width }) => (fullWidth ? "100%" : width)};
    min-width: ${({ minWidth }) => minWidth};
    border-radius: ${({ round }) => round && "25px"};
    font-weight: ${({ weight }) => weights[weight as keyof typeof weights]};
    border: none;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    -webkit-appearance: button;
    transition: all 0.15s ease-in-out;
    outline: none;
    word-break: break-all;
    position: relative;

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
        box-shadow: ${({ hoverShadow }) =>
            hoverShadow && boxShadows.normal.medium};
    }

    :disabled {
        filter: grayscale(70%);
        cursor: default;
        box-shadow: none;
    }

    > svg {
        height: 1rem;
        width: auto;
        margin: 0 ${gutters.half};
    }
`;
