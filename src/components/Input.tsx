import React, { useState } from "react";
import styled from "styled-components";
import { SearchOutline, LocationMarkerOutline } from "heroicons-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../ducks/store";
import { fetchActualWeather } from '../ducks/actualDataSlice';
import { fetchWeekWeather } from '../ducks/weekDataSlice';
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
      dispatch(fetchActualWeather(term))
      dispatch(fetchWeekWeather(term))  
    }
    setTerm('')
  }
  return (
    <div style={{display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>
      <SearchOutline onClick={(e)=> handleClick(e)} style={{position: 'relative', left: '35px', cursor: 'pointer'}}/>
      <StyledInput value={term} placeholder="Search for places..." onChange={(e) => setTerm(e.target.value)}/>
      <LocationMarkerOutline style={{position: 'relative', right: '35px', cursor: 'pointer'}}/>
    </div>
  );
}

export default Input;
