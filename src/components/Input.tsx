import React from 'react'
import styled from 'styled-components'
import {SearchOutline, LocationMarkerOutline} from 'heroicons-react'
function Input() {

    const StyledContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const StyledInput = styled.input`
        border: none;
        border-radius: 10px;
        padding: 10px 40px 10px 40px;
        font-size: 0.9rem;
        line-height: 25px;
    `;

    const SearchIcon = styled(SearchOutline)`
        position: relative;
        left: 35px;
        cursor: pointer;
    `;

    const LocationIcon = styled(LocationMarkerOutline)`
        position: relative;
        right: 35px;
        cursor: pointer;

    `;
  return (
    <StyledContainer>
        <SearchIcon />
        <StyledInput placeholder='Search for places...'/>
        <LocationIcon />
    </StyledContainer>
  )
}

export default Input