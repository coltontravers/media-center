import React from "react";
import PropTypes from "prop-types";
import colors from "../../../constants/colors";
import { StyledText } from "./Text.styled";

const Text = ({ size, weight, color, outline, children }) => {
    return (
        <StyledText size={size} weight={weight} color={color} outline={outline}>
            {children}
        </StyledText>
    );
};

export const textProps = {
    size: PropTypes.string,
    weight: PropTypes.string,
    color: PropTypes.string,
    outline: PropTypes.bool,
    children: PropTypes.node
};

export const defaultTextProps = {
    size: "normal",
    weight: "regular",
    color: colors.black,
    outline: false
};

Text.propTypes = textProps;

Text.defaultProps = defaultTextProps;

export default Text;
