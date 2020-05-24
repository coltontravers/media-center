import React, { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import PageProps, { defaultProps } from "./indexTypes";
import { StyledPageWrapper, StyledComponentWrapper } from "./index.styled";

const Page: FunctionComponent<PageProps> = ({
    route: { component: Component }
}) => {
    return (
        <StyledPageWrapper>
            <Sidebar />
            <StyledComponentWrapper>
                {Component && <Component />}
            </StyledComponentWrapper>
        </StyledPageWrapper>
    );
};

Page.defaultProps = defaultProps;

export default Page;
