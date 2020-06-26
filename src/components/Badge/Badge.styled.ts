import styled from "styled-components";
import BadgeTypes from "./badgeTypes";
import fontSizes from "../../constants/typography";
import colors from "../../constants/colors";
import { badgeThemes, badgePositions } from "../../constants/badge";

export const StyledBadge = styled.div<Omit<BadgeTypes, "label">>`
    display: flex;
    position: absolute;
    border-radius: 50%;
    padding: 2px;
    width: 2vw;
    height: 2vw;
    min-height: 25px;
    min-width: 25px;
    max-height: 30px;
    max-width: 30px;
    justify-content: center;
    align-items: center;
    font-size: ${fontSizes.extraSmall};
    box-shadow: 0px 0px 2px 1px ${colors.gray.normal};
    ${({ position }) => {
        return position && { ...badgePositions[position] };
    }};
    ${({ theme, backgroundColor, textColor }) => `
        background: ${
            backgroundColor ??
            badgeThemes[theme as keyof typeof badgeThemes].background
        }};
        color: ${
            textColor ??
            badgeThemes[theme as keyof typeof badgeThemes].textColor
        }};
    `}

    span {
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`;
