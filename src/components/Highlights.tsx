import React from 'react'
import styled from 'styled-components'
import HlCard from './HlCard'
function Highlights() {

  const StyledHighlights = styled.div`
    grid-area: 3 / 2 / 5 / 5;
    display: grid;
    grid-template: 1fr 3fr 3fr / repeat(3, 1fr);

  & h2{
    grid-area: 1/1/1/4;
    margin-top: 0;
  }
  `



  return (
    <StyledHighlights>
      <h2>Today's Highlights</h2>
      <HlCard />
      <HlCard />
      <HlCard />
      <HlCard />
      <HlCard />
      <HlCard />
    </StyledHighlights>
  )
}

export default Highlights