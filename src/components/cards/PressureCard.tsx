import React from 'react'
import { Card } from './Card.style'
import { useSelector } from 'react-redux'
import { selectActualData } from '../../ducks/actualDataSlice'
function PressureCard() {
  const weather =  useSelector(selectActualData)
  return (
    <Card>
        <h2>Pressão</h2>
        <svg fill='#666' xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21.9 45.15V37.5l-3.85 3.8-2.95-2.95 8.85-8.75 8.75 8.75-2.95 2.95L26 37.4v7.75ZM8.05 26.95v-3H40v3Zm0-6.05v-3H40v3Zm15.9-5.65-8.8-8.8L18.1 3.5l3.75 4V-.3h4.1v7.8l3.85-4 2.95 2.95Z"/></svg>
        <h3>{weather.data.main.pressure}mbar</h3>
    </Card>
  )
}

export default PressureCard