import React from 'react'
import styled from 'styled-components'
import { WeekDayData } from '../types/types';
import { formatTime, TimeFormatType } from '../util/timeFunctions'


const StyledWeekDay = styled.div`
    height: 150px;
    width: 100px;
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & div{
      display: flex;
      gap: 5px;
    }

    & div span{
      font-size: 0.9rem;
    }

    & span.min{
      color: #999;
    }
  `;



//weekDay name shortend
//max temp and min temp

const WeekDay = ({weekDay} :{weekDay: WeekDayData[]}) => {

  const maxTemp = Math.ceil(Math.max(...weekDay.map(day => day.main.temp_max)))
  const minTemp = Math.floor(Math.min(...weekDay.map(day => day.main.temp_min)))
  
  return (
    <StyledWeekDay>
      <span>{formatTime(weekDay[0].dt, TimeFormatType.ShortDay)}</span>
      <img style={{width: '45px'}} src={`https://openweathermap.org/img/wn/${weekDay[Math.floor(weekDay.length/2)].weather[0].icon}@4x.png`} alt='icon'/>
      <div>
        <span>{maxTemp}°</span>
        <span className='min'>{minTemp}°</span>
      </div>
    </StyledWeekDay>
  )
}

export default WeekDay

