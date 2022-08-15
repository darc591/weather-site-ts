import React from 'react'
import { Card } from './Card.style'
import { useSelector } from 'react-redux'
import { selectActualData } from '../../ducks/actualDataSlice'
function HumidityCard() {
   const weather = useSelector(selectActualData)
  return (
    <Card>
        <h2>Umidade</h2>
        <svg fill='#666' xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 44.25q-7.1 0-12.175-4.9Q6.75 34.45 6.75 27.3q0-3.55 1.35-6.65 1.35-3.1 3.75-5.5L24 3.2l12.15 11.95q2.4 2.4 3.775 5.5T41.3 27.3q0 7.1-5.075 12.025Q31.15 44.25 24 44.25Zm-12.5-18.2h25q-.25-2.2-1.125-4-.875-1.8-2.425-3.35L24 9.85l-8.95 8.85q-1.55 1.55-2.425 3.35-.875 1.8-1.125 4Z"/></svg>
        <h3>{weather.data.main.humidity}%</h3>
    </Card>
  )
}

export default HumidityCard