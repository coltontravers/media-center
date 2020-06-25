import styled from "styled-components";
import Flex from "../layout/Flex/Flex";
import colors from "../../constants/colors";
import Button from "../Button/Button";
import ButtonTypes from "../Button/buttonTypes";

export const StyledSidebar = styled(Flex)`
    width: 15vw;
    min-width: 150px;
    max-width: 300px;
    background: ${colors.gray.dark};
`;

interface StyledButtonProps extends ButtonTypes {
    isActive?: boolean;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
    position: relative;
    ${({ isActive }) =>
        isActive &&
        `
        color: ${colors.secondary.dark};

        ::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background: ${colors.secondary.dark}
        }
    `}

    span {
        width: 60%;
        text-align: left;
    }

    svg {
        flex: 1;
        min-width: 15px;
    }
`;

export const StyledLibrary = styled.div`
    width: 100%;
    flex: 1;
`;

export const StyledBottom = styled.div`
    width: 100%;
`;

export const StyledFooter = styled.div`
    button:last-of-type {
        float: right;
    }
`;
