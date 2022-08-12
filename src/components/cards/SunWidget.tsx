import { Sun } from 'heroicons-react'
import React from 'react'
import styled from 'styled-components'


const arcDiameter = 170;
const scale = 100;
const Widget =  styled.div`

.sunmoon {
    position: relative;
    /* & > div {
        margin-left: 10px
    } */
}


.sun-times {
    width: 230px;
    height: 60px;
    border-bottom: 2px dashed #999;
    overflow-y: hidden;

    .sun-path {
        margin-left: 25px;
        width: ${arcDiameter}px;
        height: ${arcDiameter}px;
        overflow: hidden;
        border: 1px dashed #666;
        border-radius: 50%;
    }

    .sun-symbol-path {
        position: absolute;
        color: #ffff00;
        height: ${(arcDiameter/2)}px;
        transition: transform 1s linear;
        transform-origin: 50% 100%;
        transform: rotateZ(${150*(scale/100)-80}deg);
        left: ${(arcDiameter/2)+25}px;
        bottom: 0;
    
        .symbol {
            position: relative;
            top: -8px;
            scale: 1.3;
        }
    }

    .sun-animation {
        //actual time HERE % of the time between sunrise and sunset
        width: ${scale}%;
        height: 150px;
        background-color: rgba(234, 110, 74, 0.8);
        -webkit-transition: width 1s linear;
        transition: width 1s linear;
    }
}


.legend {
    position: absolute;
    bottom: 1em;

    & > div {
        position: absolute;
        font-size: 12px;
        width: 80px;
    }
  
    .sunrise {
        left: 15px;
    }

    .sunset {
        left: 185px;
    }
}

`

function SunWidget() {
  return (
    <Widget>
    <div className="sunmoon">
    <div className="sun-times">
        <div className="sun-path">
            <div className="sun-animation"></div>
        </div>
        <div className="sun-symbol-path"><Sun className='symbol'/></div>
    </div>
    <div className="legend">
        <div className="sunrise">05:30 AM</div>
        <div className="sunset">8:04 PM</div>
    </div>
    <div className="clear">&nbsp;</div>
</div>
</Widget>
  )
}

export default SunWidget