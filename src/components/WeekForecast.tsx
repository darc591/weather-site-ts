import React from "react";
import styled from "styled-components";
import WeekDay from "./WeekDay";
import { selectWeekData } from "../ducks/weekDataSlice";
import { useSelector } from "react-redux";
import {WeekDayData, WeekWeatherData} from '../types/types'

const StyledWeekForecast = styled.div`
  grid-area: 2 / 2 / 2 / 5;
  display: flex;
  justify-content: space-between;
`;

const groupWeekDays = (list: WeekDayData[]) => {
  const groupedData : WeekDayData[][] = [];
  list.forEach((day: WeekDayData) => {
    const date = new Date(day.dt * 1000).getDay();
    if (!groupedData[date]) {
      groupedData[date] = [day];
    } else {
      groupedData[date].push(day);
    }
  });
  const today = new Date().getDay()
  delete groupedData[today];
  return groupedData;
};

const sortDays = (days : WeekDayData[][] ) => {
  const sorted = days.sort((a, b) => {
    const date1 = new Date(a[0].dt)
    const date2 = new Date(b[0].dt)
    if(date1 < date2){
      return -1
    }
    if(date1 > date2){
      return 1
    }

    return 0;
  }) 
  return sorted;
}
function WeekForecast() {
  const weekData = useSelector(selectWeekData)
  const groupedData : WeekDayData[][] = sortDays(groupWeekDays(weekData.data.list))
  const {isLoading} = weekData;
  return (
    <StyledWeekForecast>
      {groupedData.map((day, index) => (
        <WeekDay key={index} weekDay={day} isLoading={isLoading}/>
      ))}
    </StyledWeekForecast>
  );
}

export default WeekForecast;
