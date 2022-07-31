import React from "react";
import styled from "styled-components";
import WeekDay from "./WeekDay";

const StyledWeekForecast = styled.div`
  grid-area: 2 / 2 / 2 / 5;
  display: flex;
  justify-content: space-between;
`;
function WeekForecast() {
  return (
    <StyledWeekForecast>
      <WeekDay />
      <WeekDay />
      <WeekDay />
      <WeekDay />
      <WeekDay />
    </StyledWeekForecast>
  );
}

export default WeekForecast;
