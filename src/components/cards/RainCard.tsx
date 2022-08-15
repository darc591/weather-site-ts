import React from 'react'
import { Card } from './Card.style'
import { useSelector } from 'react-redux'
import { selectActualData } from '../../ducks/actualDataSlice'
import { fetchWeekWeather } from '../../ducks/weekDataSlice'
function RainCard() {
  const weather =  useSelector(selectActualData)
  return (
    <Card>
        <h2>Chuva</h2>
        <svg fill='#666' xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M28.3 46.05q-.9.4-1.875.1-.975-.3-1.375-1.2l-3.45-6.9q-.4-.9-.1-1.825.3-.925 1.25-1.375.85-.4 1.8-.1.95.3 1.35 1.2l3.45 6.9q.4.9.125 1.85-.275.95-1.175 1.35Zm12-.05q-.9.4-1.875.1-.975-.3-1.375-1.2L33.6 38q-.4-.9-.1-1.825.3-.925 1.25-1.375.85-.4 1.8-.1.95.3 1.35 1.2l3.45 6.9q.4.9.125 1.85Q41.2 45.6 40.3 46Zm-24 0q-.9.4-1.875.125T13.05 44.95l-3.45-6.9q-.4-.9-.075-1.825.325-.925 1.275-1.375.85-.4 1.8-.125.95.275 1.35 1.175l3.45 6.95q.4.9.1 1.825-.3.925-1.2 1.325Zm-1.8-14.7q-4.7 0-8.025-3.35t-3.325-8q0-4.2 2.9-7.5T13.3 8.7q1.75-2.8 4.525-4.475Q20.6 2.55 24 2.55q4.65 0 7.9 2.9t4.2 7.2q4.1.4 6.425 3.075Q44.85 18.4 44.85 21.95q0 3.85-2.725 6.6Q39.4 31.3 35.5 31.3Zm0-4.75h21q1.95 0 3.3-1.35 1.35-1.35 1.35-3.25 0-1.95-1.35-3.3-1.35-1.35-3.3-1.35h-3.85v-2.35q0-3.2-2.225-5.425Q27.2 7.3 24 7.3q-2.3 0-4.2 1.25-1.9 1.25-2.8 3.3l-.6 1.45h-1.95q-2.75.1-4.675 2.025Q7.85 17.25 7.85 19.95T9.8 24.6q1.95 1.95 4.7 1.95Zm9.5-9.6Z"/></svg>
        <h3 style={{textAlign: 'center'}}>{weather.data.rain?.['1h'] ? weather.data.rain?.['1h'] : 0} mm</h3>
    </Card>
  )
}

export default RainCard