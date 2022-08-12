import React, { useState } from 'react'
import { Card } from './Card.style'
import { useSelector } from 'react-redux'
import { formatTime, TimeFormatType } from '../../util/timeFunctions'
import { selectActualData } from '../../ducks/actualDataSlice'
// import SunWidget from './SunWidget'

function SunsetCard() {
  const weather = useSelector(selectActualData)

  return (
    <Card style={{gridArea: '2 / 1 / 2 / 3',minWidth: '237px', width: '360px'}}>
          <div style={{display: 'flex'}}>
          <h3 style={{marginRight: '40px'}}>Nascer do sol {formatTime(weather.data.sys.sunrise, TimeFormatType.Time)}</h3>
          <h3>Pôr do sol {formatTime(weather.data.sys.sunset, TimeFormatType.Time)}</h3>
          </div>
          <span>--"widget"--</span>
        {/* todo ADD sunWidget animation */}
        {/* <SunWidget/> */}
    </Card>
  )
}

export default SunsetCard