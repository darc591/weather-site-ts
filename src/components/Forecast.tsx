import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectActualData } from "../ducks/actualDataSlice";
const StyledForecast = styled.div`
  grid-area: 2 / 1 / 5 / 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & h1 {
    font-size: 3rem;
  }

  & div {
    width: 300px;
    height: 2px;
    border-radius: 10px;
    background-color: #777;
  }
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  align-self: center;
`;
function Forecast() {
  const actualData = useSelector(selectActualData)
  return (
    <StyledForecast>
      <StyledImg src="https://openweathermap.org/img/wn/13d@4x.png" />
      <h1>12C°</h1>
      <div></div>
      <span>Monday, 16:00</span>
      <span>Mostly Cloudy Rain - 30%</span>
      <h1>{actualData.data.name}</h1>
    </StyledForecast>
  );
}

export default Forecast;
