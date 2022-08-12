import React from 'react'
import { Card } from './Card.style'
import { useSelector } from 'react-redux'
import { selectActualData } from '../../ducks/actualDataSlice'
function PressureCard() {
  const weather =  useSelector(selectActualData)
  return (
    <Card>
        <h2>Pressão</h2>
        <h2>{weather.data.main.pressure}mbar</h2>
    </Card>
  )
}

export default PressureCard