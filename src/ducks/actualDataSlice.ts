import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import type { ActualWeatherData } from "../types/types";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "../util/metricFuncions";

interface ActualData {
  data: ActualWeatherData,
  isLoading: boolean,
  hasError: boolean,
  metrics: string

}

export const fetchActualWeather = createAsyncThunk(
    'actualData/fetchActualWeather',
    async (city: string, thunkAPI) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd1af5f7db36fcfe5990524757daff37&units=metric&lang=pt_br`)
        return response.data;
    }
)

const initialState : ActualData = {
  data: {
      "coord": {
          "lon": -52.2,
          "lat": -28.4492
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "céu limpo",
            "icon": "01d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 14.69,
          "feels_like": 13.99,
          "temp_min": 14.69,
          "temp_max": 14.69,
          "pressure": 1024,
          "humidity": 68,
          "sea_level": 1024,
          "grnd_level": 960
        },
        "visibility": 10000,
        "wind": {
          "speed": 2.99,
          "deg": 87,
          "gust": 4.53
        },
        "clouds": {
          "all": 0
        },
        "dt": 1660229537,
        "sys": {
          "country": "BR",
          "sunrise": 1660212245,
          "sunset": 1660251845
        },
        "timezone": -10800,
        "id": 3457817,
        "name": "Marau",
        "cod": 200
        
  },
  isLoading: false,
  hasError: false,
  metrics: 'C'
}

const actualDataSlice = createSlice({
    name: 'actualData',
    initialState: initialState,
    reducers: {
        addActualData: (state,action) => action.payload,

        changeActualMetrics: (state, action) => {
          if(state.metrics === action.payload) return
          state.metrics = action.payload;
          if(action.payload === 'F'){
            state.data.main.temp = celsiusToFahrenheit(state.data.main.temp)
            state.data.main.temp_max = celsiusToFahrenheit(state.data.main.temp_max)
            state.data.main.temp_min = celsiusToFahrenheit(state.data.main.temp_min)
            state.data.main.feels_like = celsiusToFahrenheit(state.data.main.feels_like)
          }
          if(action.payload === 'C'){
            state.data.main.temp = fahrenheitToCelsius(state.data.main.temp)
            state.data.main.temp_max = fahrenheitToCelsius(state.data.main.temp_max)
            state.data.main.temp_min = fahrenheitToCelsius(state.data.main.temp_min)
            state.data.main.feels_like = fahrenheitToCelsius(state.data.main.feels_like)
          }
        }

    },
    extraReducers: {
        'actualData/fetchActualWeather/pending': (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        'actualData/fetchActualWeather/fulfilled': (state, action) => {
            state.data = action.payload;
            state.metrics = 'C';
            state.isLoading = false;
            state.hasError = false;
        },
        'actualData/fetchActualWeather/rejected': (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
    
})

export const selectIsLoading = (state : {actualData: ActualData}) => state.actualData.isLoading;
export const selectActualData = (state : {actualData : ActualData}) => state.actualData;
export const {changeActualMetrics} =  actualDataSlice.actions; 
export const actualDataReducer = actualDataSlice.reducer;