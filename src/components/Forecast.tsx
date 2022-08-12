import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectActualData } from "../ducks/actualDataSlice";
import { formatTime, TimeFormatType } from "../util/timeFunctions";
const StyledForecast = styled.div`
  grid-area: 2 / 1 / 5 / 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & h1 {
    font-size: 3rem;
  }

  & .line {
    width: 300px;
    height: 2px;
    border-radius: 10px;
    background-color: #777;
  }
  & .time {
    font-size: 2rem;
  }
  & span {
    font-size: 1.5rem;
    color: #333;
  }
`;

const StyledImg = styled.img`
  width: 220px;
  height: 220px;
  align-self: center;
`;

function Forecast() {
  const weather = useSelector(selectActualData)
  return (
    <StyledForecast>
      <StyledImg src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@4x.png`} />
      <h1>{Math.floor(weather.data.main.temp)}{weather.metrics}°</h1>
      <span>{weather.data.weather[0].description}</span>
      <span>Sensação <strong>{Math.floor(weather.data.main.feels_like)}{weather.metrics}°</strong></span>
      <div className="line"></div>
      <div className="time">{formatTime(weather.data.dt, TimeFormatType.DayTime)}</div>
      <h1>{weather.data.name}</h1>
    </StyledForecast>
  );
}

export default Forecast;
