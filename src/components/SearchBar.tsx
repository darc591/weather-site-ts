import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Metric from "./Metric";

const StyledSearchBar = styled.div`
  grid-area: 1 / 1 / 1 / 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function SearchBar() {
  return (
    <StyledSearchBar>
      <Input />
      <Metric />
    </StyledSearchBar>
  );
}

export default SearchBar;
