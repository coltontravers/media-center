import React from "react";
import PropTypes from "prop-types";
import { StyledFlex } from "./Flex.styled";

export const Flex = ({ children, ...restProps }) => {
    return <StyledFlex {...restProps}>{children}</StyledFlex>;
};

Flex.propTypes = {
    direction: PropTypes.string,
    alignItems: PropTypes.string,
    alignContent: PropTypes.string,
    wrap: PropTypes.string,
    children: PropTypes.node
};

Flex.defaultProps = {
    direction: "column",
    alignItems: "space-around",
    alignContent: "space-around",
    wrap: "wrap"
};

export default Flex;
