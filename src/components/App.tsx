import React, { useEffect} from 'react';
import { Wrapper, Container} from './styles/styles'
import SearchBar from './SearchBar';
import Forecast from './Forecast';
import WeekForecast from './WeekForecast';
import Highlights from './Highlights';
import { useDispatch, useSelector} from 'react-redux';
import { selectActualData } from '../ducks/actualDataSlice';
import { AppDispatch } from '../ducks/store';
import { fetchActualWeatherByLocation } from '../ducks/actualDataSlice';
import { fetchWeekWeatherByLocation } from '../ducks/weekDataSlice';
import { formatTime, TimeFormatType } from '../util/timeFunctions';
function App() {
  const {data} = useSelector(selectActualData);
  const hour = formatTime(data.dt,data.timezone, TimeFormatType.Hour);
  const dayTime = hour < 19 && hour > 5 ? 'day' : 'night';
  
  const dispatch : AppDispatch =  useDispatch()
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      dispatch(fetchActualWeatherByLocation({latitude: coords.latitude ,longitude: coords.longitude}))
      dispatch(fetchWeekWeatherByLocation({latitude: coords.latitude ,longitude: coords.longitude}))
    })
  }, [dispatch])
  return (
    <Container className={dayTime}>
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
