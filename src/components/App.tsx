import React, { useEffect } from 'react';
import { Wrapper, Container} from './styles/styles'
import SearchBar from './SearchBar';
import Forecast from './Forecast';
import WeekForecast from './WeekForecast';
import Highlights from './Highlights';
import {getLocationByName} from '../data/data'
function App() {
  
  useEffect(()=>{
    getLocationByName('Marau');
  },[])
  return (
    <Container>
      <Wrapper>
        <SearchBar />
        <Forecast />
        <WeekForecast />
        <Highlights />
        </Wrapper>
    </Container>
  );
}



export default App;
