import React from "react";
import styled from "styled-components";
import WindCard from "./cards/WindCard";
import PressureCard from "./cards/PressureCard";
import HumidityCard from "./cards/HumidityCard";
import RainCard from "./cards/RainCard";
import SunsetCard from "./cards/SunsetCard";
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
  return (
    <StyledHighlights>
      <h2>Destaques de hoje</h2>
      <SunsetCard/>
      <WindCard />
      <PressureCard/>
      <HumidityCard/>
      <RainCard/> 
    </StyledHighlights>
  );
}

export default Highlights;
