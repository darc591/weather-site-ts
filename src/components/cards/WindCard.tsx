import { PaperAirplane } from 'heroicons-react'
import React from 'react'
import { Card } from './Card.style'
import { useSelector } from 'react-redux'
import { selectActualData } from '../../ducks/actualDataSlice'

const WindCard = () => {
  const weather = useSelector(selectActualData)

  return (
    <Card>
        <h2>Vento</h2>
        <PaperAirplane style={{scale: '1.25' ,fill: '#666', rotate: `${weather.data.wind.deg}deg`}}/>
        <h2>{Math.floor(weather.data.wind.speed * 3.6)} Km/h</h2>
    </Card>
  )
}

export default WindCard