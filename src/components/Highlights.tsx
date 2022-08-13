import React from "react";
import styled from "styled-components";
import WindCard from "./cards/WindCard";
import PressureCard from "./cards/PressureCard";
import HumidityCard from "./cards/HumidityCard";
import RainCard from "./cards/RainCard";
import SunsetCard from "./cards/SunsetCard";
import { Card } from "./cards/Card.style";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from "react-redux";
import { selectActualData } from "../ducks/actualDataSlice";
const StyledHighlights = styled.div`
  grid-area: 3 / 2 / 5 / 5;
  display: grid;
  grid-template: 1fr 3fr 3fr / repeat(3, 1fr);

  & h2 {
    grid-area: 1/1/1/4;
    margin-top: 0;
  }
`;



function Highlights() {
  const {isLoading} = useSelector(selectActualData)
  return (
    <StyledHighlights>
      <h2>Destaques de hoje</h2>
      {isLoading ? <>
      <Card style={{gridArea: '2 / 1 / 2 / 3', width: '360px'}}><Skeleton width={280} height={20}/><Skeleton width={280} height={70}/></Card>
      <Card>
        <Skeleton width={100} height={20}/>
        <Skeleton width={100} height={70}/>
      </Card> 
      <Card>
        <Skeleton width={100} height={20}/>
        <Skeleton width={100} height={70}/>
      </Card> 
      <Card>
        <Skeleton width={100} height={20}/>
        <Skeleton width={100} height={70}/>
      </Card> 
      <Card>
        <Skeleton width={100} height={20}/>
        <Skeleton width={100} height={70}/>
      </Card> 
      </>: 
      <>
      <SunsetCard/>
      <WindCard />
      <PressureCard/>
      <HumidityCard/>
      <RainCard/> 
      
      </>}
    </StyledHighlights>
  );
}

export default Highlights;
