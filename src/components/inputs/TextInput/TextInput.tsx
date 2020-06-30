import React, { FunctionComponent } from "react";
import { TextInputProps, defaultProps } from "./textInputTypes";
import { StyledTextInput } from "./TextInput.styled";

const TextInput: FunctionComponent<TextInputProps> = ({
    defaultValue,
    background,
    color,
    width,
    fullWidth,
    padding,
    fontSize,
    placeholder,
    round,
    handleOnChange,
    handleOnBlur
}) => (
    <StyledTextInput
        defaultValue={defaultValue}
        placeholder={placeholder}
        background={background}
        color={color}
        width={width}
        fullWidth={fullWidth}
        padding={padding}
        fontSize={fontSize}
        round={round}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
    />
);

TextInput.defaultProps = defaultProps;

export default TextInput;
