import React, { FunctionComponent } from "react";
import { Star as StarIcon } from "@styled-icons/boxicons-regular";
import StarTypes, { defaultProps } from "./starTypes";
import { StyledStar } from "./Star.styled";

const Star: FunctionComponent<StarTypes> = ({
    filled,
    fillColor,
    backgroundColor,
    size
}) => {
    return (
        <>
            <StyledStar>
                <StarIcon size={size} />
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

Star.defaultProps = defaultProps;

export default Star;
