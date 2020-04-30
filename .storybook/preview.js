import React from "react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import GlobalStyles from "../src/styles/index";

addDecorator(withKnobs());

const withGlobal = (cb) => (
    <>
        <GlobalStyles />
        {cb()}
    </>
);

addDecorator(withGlobal);
