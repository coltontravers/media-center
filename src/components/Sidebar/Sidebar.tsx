import React, { FunctionComponent } from "react";
import { Movie, Tv, Home } from "@styled-icons/boxicons-regular";
import { SettingsOutline } from "@styled-icons/evaicons-outline";
import {
    StyledSidebar,
    StyledLibrary,
    StyledBottom,
    StyledButton,
    StyledFooter
} from "./Sidebar.styled";
import Button from "../Button/Button";

export const Sidebar: FunctionComponent = () => {
    return (
        <StyledSidebar>
            <StyledLibrary>
                <StyledButton
                    background="transparent"
                    fullWidth
                    weight="extraBold"
                    isActive
                    icon={<Home />}
                >
                    Home
                </StyledButton>
                <StyledButton
                    background="transparent"
                    fullWidth
                    weight="extraBold"
                    icon={<Movie />}
                >
                    Movies
                </StyledButton>
                <StyledButton
                    background="transparent"
                    fullWidth
                    weight="extraBold"
                    icon={<Tv />}
                >
                    Tv Shows
                </StyledButton>
            </StyledLibrary>
            <StyledBottom>
                <Button background="transparent" fullWidth weight="bold">
                    Recently Played
                </Button>
                <Button background="transparent" fullWidth weight="bold">
                    Recommended
                </Button>

                <StyledFooter>
                    <Button background="transparent" hoverShadow={false}>
                        <SettingsOutline size="35" />
                    </Button>
                </StyledFooter>
            </StyledBottom>
        </StyledSidebar>
    );
};

export default Sidebar;
