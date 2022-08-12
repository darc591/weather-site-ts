import React from 'react'
import { Card } from './Card.style'
import { useSelector } from 'react-redux'
import { selectActualData } from '../../ducks/actualDataSlice'
function HumidityCard() {
   const weather = useSelector(selectActualData)
  return (
    <Card>
        <h2>Umidade</h2>
        <h2>{weather.data.main.humidity}%</h2>
    </Card>
  )
}

export default HumidityCard