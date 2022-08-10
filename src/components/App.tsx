import React, { useEffect} from 'react';
import { Wrapper, Container} from './styles/styles'
import SearchBar from './SearchBar';
import Forecast from './Forecast';
import WeekForecast from './WeekForecast';
import Highlights from './Highlights';
import type { AppDispatch } from '../ducks/store';
import { useDispatch } from 'react-redux';
import { fetchActualWeather } from '../ducks/actualDataSlice';
import { fetchWeekWeather } from '../ducks/weekDataSlice';
function App() {
  const dispatch =  useDispatch<AppDispatch>()

  useEffect(()=>{
    dispatch(fetchActualWeather('sao paulo'))
    dispatch(fetchWeekWeather('sao paulo'))
  },[dispatch])
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
