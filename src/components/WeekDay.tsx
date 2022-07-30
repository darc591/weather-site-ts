import React from 'react'
import styled from 'styled-components'


const StyledWeekDay = styled.div`
    height: 150px;
    width: 100px;
    background-color: white;
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

  const StyleImg = styled.img`
    width: 35px;
    height: 35px;
  `
function WeekDay() {

  

  return (
    <StyledWeekDay>
      <span>Day</span>
      <StyleImg src='https://openweathermap.org/img/wn/13d@4x.png'/>
      <div>
        <span>15°</span>
        <span className='min'>-3°</span>
      </div>
    </StyledWeekDay>
  )
}

export default WeekDay

