import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeActualMetrics } from "../ducks/actualDataSlice";
import { AppDispatch } from "../ducks/store";
import { changeWeekMetrics } from "../ducks/weekDataSlice";
import { useSelector } from "react-redux";
import { selectActualData } from "../ducks/actualDataSlice";
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
  const dispatch :  AppDispatch = useDispatch()
  const {metrics} = useSelector(selectActualData)
  const handleClick = (metric : string) => {
    dispatch(changeActualMetrics(metric))
    dispatch(changeWeekMetrics(metric))
  }
  return (
    <Container>
      <StyledButton style={metrics === 'C' ? {background: '#999'} : {background: 'white'}} onClick={()=> handleClick('C')}>C°</StyledButton>
      <StyledButton style={metrics === 'F' ? {background: '#999'} : {background: 'white'}}onClick={()=> handleClick('F')}>F°</StyledButton>
    </Container>
  );
}

export default Metric;
