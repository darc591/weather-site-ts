import React from 'react'
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components'
import { WeekDayData } from '../types/types';
import { formatTime, TimeFormatType } from '../util/timeFunctions'
import 'react-loading-skeleton/dist/skeleton.css'


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

const WeekDay = ({weekDay, isLoading} :{weekDay: WeekDayData[], isLoading: boolean}) => {

  const maxTemp = Math.ceil(Math.max(...weekDay.map(day => day.main.temp_max)))
  const minTemp = Math.floor(Math.min(...weekDay.map(day => day.main.temp_min)))
  return (
    <StyledWeekDay>
      {isLoading ? <Skeleton width={60} height={25}/> : <h2>{formatTime(weekDay[0].dt,0, TimeFormatType.ShortDay)}</h2>}
      {isLoading ? <Skeleton circle width={35} height={35}/> : <img style={{width: '60px'}} src={`https://openweathermap.org/img/wn/${weekDay[Math.floor(weekDay.length/2)].weather[0].icon}@4x.png`} alt='icon'/>}
      {isLoading ? <Skeleton width={60}/> : 
      <>
      <div>
        <h3>{maxTemp}°</h3>
        <h3 className='min'>{minTemp}°</h3>
      </div>
      </>}
      
    </StyledWeekDay>
  )
}

export default WeekDay

