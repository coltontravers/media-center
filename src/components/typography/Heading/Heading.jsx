/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import PropTypes from "prop-types";
import colors from "../../../constants/colors";
import { StyledHeading } from "./Heading.styled";

const levels = [
    {
        name: "h1",
        component: <h1 />
    },
    {
        name: "h2",
        component: <h2 />
    },
    {
        name: "h3",
        component: <h3 />
    },
    {
        name: "h4",
        component: <h4 />
    },
    {
        name: "h5",
        component: <h5 />
    },
    {
        name: "h6",
        component: <h6 />
    }
];

const Heading = ({ level, weight, color, children }) => {
    const foundLevel = levels.find(
        (currentLevel) => currentLevel.name === level
    );

    return (
        <StyledHeading
            component={foundLevel.component}
            weight={weight}
            color={color}
            levels={levels}
        >
            {children}
        </StyledHeading>
    );
};

Heading.propTypes = {
    level: PropTypes.string,
    weight: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node
};

Heading.defaultProps = {
    level: "h1",
    weight: "normal",
    color: colors.black
};

export default Heading;
