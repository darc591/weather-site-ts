import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  border: none;
  background-color: white;
  color: black;
  font-size: larger;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;
function Metric() {
  return (
    <Container>
      <StyledButton>C°</StyledButton>
      <StyledButton>F°</StyledButton>
    </Container>
  );
}

export default Metric;
