import React from 'react'
import { Card } from './Card.style'
import { useSelector } from 'react-redux'
import { selectActualData } from '../../ducks/actualDataSlice'
function RainCard() {
  const weather =  useSelector(selectActualData)
  return (
    <Card>
        <h2>Chuva</h2>
        <h2 style={{textAlign: 'center'}}>{weather.data.rain?.['1h'] ? weather.data.rain?.['1h'] : 0} mm</h2>
    </Card>
  )
}

export default RainCard