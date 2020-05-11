import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { StyledStar } from "./Star.styled";

const Star = ({ filled }) => {
    return (
        <>
            <StyledStar filled={filled}>
                <FontAwesomeIcon icon={faStar} size="4x" />
            </StyledStar>

            {/* Ugly, but this is for applying a linear gradient as a background to the svg */}
            <svg width="0" height="0">
                <linearGradient
                    spreadMethod="pad"
                    id="lgrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >
                    <stop
                        offset={filled}
                        style={{
                            stopColor: "rgb(254, 229, 0)",
                            stopOpacity: 1
                        }}
                    />
                    <stop
                        offset={filled}
                        style={{
                            stopColor: "silver",
                            stopOpacity: 0.2
                        }}
                    />
                </linearGradient>
            </svg>
        </>
    );
};

Star.propTypes = {
    filled: PropTypes.string
};

Star.defaultProps = {
    filled: "100%"
};

export default Star;
