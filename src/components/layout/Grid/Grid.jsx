import React from "react";
import PropTypes from "prop-types";
import { StyledGrid } from "./Grid.styled";

const Grid = ({ columns, rows, gridGap, children }) => {
    return (
        <StyledGrid columns={columns} rows={rows} gridGap={gridGap}>
            {children}
        </StyledGrid>
    );
};

Grid.propTypes = {
    columns: PropTypes.string,
    rows: PropTypes.string,
    gridGap: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Grid;
