import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeekWeather = createAsyncThunk(
    'weekData/fetchWeekWeather',
    async (city: string, thunkAPI) => {
        const coords = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=cd1af5f7db36fcfe5990524757daff37`)
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.data[0].lat}&lon=${coords.data[0].lon}&appid=cd1af5f7db36fcfe5990524757daff37&units=metric`)
        return response.data;
    }
)


const weekDataSlice = createSlice({
    name: 'weekData',
    initialState: {
        isLoading: false,
        hasError: false
    },
    reducers: {
        addWeekData: (state,action) => action.payload
    },
    extraReducers: {
        'weekData/fetchWeekWeather/pending': (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        'weekData/fetchWeekWeather/fulfilled': (state, action) => {
            state['data'] = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        'weekData/fetchWeekWeather/rejected': (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
    
    
})

export const weekDataReducer = weekDataSlice.reducer;