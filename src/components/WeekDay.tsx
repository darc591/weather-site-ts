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

    & div h3{
      font-size: 0.9rem;
    }

    & h3.min{
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
      <h2>{formatTime(weekDay[0].dt, TimeFormatType.ShortDay)}</h2>
      <img style={{width: '60px'}} src={`https://openweathermap.org/img/wn/${weekDay[Math.floor(weekDay.length/2)].weather[0].icon}@4x.png`} alt='icon'/>
      <div>
        <h3>{maxTemp}°</h3>
        <h3 className='min'>{minTemp}°</h3>
      </div>
    </StyledWeekDay>
  )
}

export default WeekDay

