import React, { useState } from "react";
import styled from "styled-components";
import { SearchOutline, LocationMarkerOutline } from "heroicons-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../ducks/store";
import { fetchActualWeatherByName } from '../ducks/actualDataSlice';
import { fetchWeekWeather } from '../ducks/weekDataSlice';
import { fetchActualWeatherByLocation } from "../ducks/actualDataSlice";
import { fetchWeekWeatherByLocation } from "../ducks/weekDataSlice";
const StyledInput = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px 40px 10px 40px;
  font-size: 0.9rem;
  line-height: 25px;
`;

function Input() {
  const dispatch : AppDispatch = useDispatch()
  const [term, setTerm] = useState('')
  
  const handleClick = (e : any) => {
    e.preventDefault()
    if(term.length > 0){
      dispatch(fetchActualWeatherByName(term))
      dispatch(fetchWeekWeather(term))  
    }
    setTerm('')
  }
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      dispatch(fetchActualWeatherByLocation({latitude: coords.latitude ,longitude: coords.longitude}))
      dispatch(fetchWeekWeatherByLocation({latitude: coords.latitude ,longitude: coords.longitude}))
    })
  }

  const hadleKeyPress = (e : any) => {
    if(e.key === 'Enter'){
      if(term.length > 0){
        dispatch(fetchActualWeatherByName(term))
        dispatch(fetchWeekWeather(term))  
      }
      setTerm('')
    }
  }
  return (
    <div style={{display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>
      <SearchOutline onClick={(e)=> handleClick(e)} style={{position: 'relative', left: '35px', cursor: 'pointer'}}/>
      <StyledInput value={term} placeholder="Procurar por lugares..." onChange={(e) => setTerm(e.target.value)} onKeyDown={(e)=> hadleKeyPress(e)}/>
      <LocationMarkerOutline onClick={()=> handleLocation()} style={{position: 'relative', right: '35px', cursor: 'pointer'}}/>
    </div>
  );
}

export default Input;
