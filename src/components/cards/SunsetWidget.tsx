import React from "react";
import widget from './widget.png'
import { useSelector } from "react-redux";
import { selectActualData } from "../../ducks/actualDataSlice";
import { formatTime, TimeFormatType } from "../../util/timeFunctions";

function SunsetWidget() {
    const {data} = useSelector(selectActualData)
    const deg = (formatTime(data.dt, data.timezone, TimeFormatType.Hour) - formatTime(data.sys.sunrise, data.timezone,TimeFormatType.Hour)) * 15;

  return (
    <div style={{height: '90px', width: '200px', overflow: 'hidden'}}>
         <img style={{position: 'relative', bottom: '15px',transition: 'transform 1s linear', transform: `rotateZ(${deg}deg)`}} src={widget} alt="widget" /> 
    </div>
  );
}

export default SunsetWidget;