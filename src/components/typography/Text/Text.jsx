import React from "react";
import PropTypes from "prop-types";
import colors from "../../../constants/colors";
import { StyledText } from "./Text.styled";

// Replace with constants
const sizes = [
    {
        name: "xsmall",
        value: ".6rem"
    },
    {
        name: "small",
        value: ".8rem"
    },
    {
        name: "normal",
        value: "1rem"
    },
    {
        name: "large",
        value: "1.2rem"
    }
];

const weights = [
    {
        name: "normal",
        value: "normal"
    },
    {
        name: "strong",
        value: "bold"
    }
];

const Text = ({ size, weight, color, children }) => {
    return (
        <StyledText
            size={size}
            weight={weight}
            color={color}
            sizes={sizes}
            weights={weights}
        >
            {children}
        </StyledText>
    );
};

Text.propTypes = {
    size: PropTypes.string,
    weight: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node
};

Text.defaultProps = {
    size: "normal",
    weight: "normal",
    color: colors.black
};

export default Text;
