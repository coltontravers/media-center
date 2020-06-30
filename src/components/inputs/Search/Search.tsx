import React, { FunctionComponent } from "react";
import { Search as SearchIcon } from "@styled-icons/boxicons-regular";
import { SearchProps, defaultProps } from "./searchTypes";
import TextInput from "../TextInput/TextInput";
import { StyledSearch } from "./Search.styled";
import fontSizes from "../../../constants/typography";

const Search: FunctionComponent<SearchProps> = ({
    iconPlacement,
    iconColor,
    fontSize,
    width,
    fullWidth,
    ...textInputProps
}) => (
    <StyledSearch
        iconPlacement={iconPlacement}
        iconColor={iconColor}
        width={width}
        fullWidth={fullWidth}
    >
        <SearchIcon
            size={fontSizes[fontSize as keyof typeof fontSizes]}
            color={iconColor}
        />
        <TextInput
            fontSize={fontSize}
            width={width}
            fullWidth={fullWidth}
            {...textInputProps}
        />
    </StyledSearch>
);

Search.defaultProps = defaultProps;

export default Search;
