import React, { useEffect} from 'react';
import { Wrapper, Container} from './styles/styles'
import SearchBar from './SearchBar';
import Forecast from './Forecast';
import WeekForecast from './WeekForecast';
import Highlights from './Highlights';


function App() {

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
