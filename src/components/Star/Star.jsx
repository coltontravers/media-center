import React from "react";
import PropTypes from "prop-types";
import { StyledStar } from "./Star.styled";

const Star = ({ filled }) => {
    return <StyledStar filled={filled} />;
};

Star.propTypes = {
    filled: PropTypes.string
};

Star.defaultProps = {
    filled: "100%"
};

export default Star;
