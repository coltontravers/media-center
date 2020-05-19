import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { StyledStar } from "./Star.styled";

const Star = ({ filled, fillColor, backgroundColor, size }) => {
    return (
        <>
            <StyledStar filled={filled}>
                <FontAwesomeIcon icon={faStar} size={size} />
            </StyledStar>

            {/* Ugly, but this is for applying a linear gradient as a background/fill to the svg */}
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
                            stopColor: fillColor,
                            stopOpacity: 1
                        }}
                    />
                    <stop
                        offset={filled}
                        style={{
                            stopColor: backgroundColor
                        }}
                    />
                </linearGradient>
            </svg>
        </>
    );
};

Star.propTypes = {
    filled: PropTypes.string,
    fillColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.string
};

Star.defaultProps = {
    filled: "100%",
    fillColor: "rgb(254, 229, 0)",
    backgroundColor: "rgb(237, 237, 237)",
    size: "4x"
};

export default Star;
