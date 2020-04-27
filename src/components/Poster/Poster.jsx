import React from "react";
import PropTypes from "prop-types";

const Poster = ({ name }) => {
    return <div>{name}</div>;
};

Poster.propTypes = {
    name: PropTypes.string
};

export default Poster;
