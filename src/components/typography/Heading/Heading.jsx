/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import PropTypes from "prop-types";
import { textProps, defaultTextProps } from "../Text/Text";
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

const Heading = ({ level, children, ...restProps }) => {
    const foundLevel = levels.find(
        (currentLevel) => currentLevel.name === level
    );

    return (
        <StyledHeading
            component={foundLevel.component}
            levels={levels}
            {...restProps}
        >
            {children}
        </StyledHeading>
    );
};

Heading.propTypes = {
    ...textProps,
    level: PropTypes.string
};

Heading.defaultProps = {
    ...defaultTextProps,
    level: "h1",
    weight: "bold"
};

export default Heading;
