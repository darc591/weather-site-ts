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

export const fetchActualWeatherByName = createAsyncThunk(
    'actualData/fetchActualWeather',
    async (city: string, thunkAPI) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd1af5f7db36fcfe5990524757daff37&units=metric&lang=pt_br`)
        return response.data;
    }
)

export const fetchActualWeatherByLocation = createAsyncThunk(
  'actualData/fetchActualWeather',
  async (coords : {latitude: number, longitude: number}, thunkAPI) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=cd1af5f7db36fcfe5990524757daff37&units=metric&lang=pt_br`)
    return response.data
  }
)

const initialState : ActualData = {
  data: {
      "coord": {
          "lon": 0,
          "lat": 0
        },
        "weather": [
          {
            "id": 0,
            "main": "",
            "description": "",
            "icon": ""
          }
        ],
        "base": "stations",
        "main": {
          "temp": 0,
          "feels_like": 0,
          "temp_min": 0,
          "temp_max": 0,
          "pressure": 0,
          "humidity": 0,
          "sea_level": 0,
          "grnd_level": 0
        },
        "visibility": 0,
        "wind": {
          "speed": 0,
          "deg": 0,
          "gust": 0
        },
        "clouds": {
          "all": 0
        },
        "dt": 0,
        "sys": {
          "country": "",
          "sunrise": 0,
          "sunset": 0
        },
        "timezone": 0,
        "id": 0,
        "name": "",
        "cod": 0
        
  },
  isLoading: true,
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
            state.hasError = false;
            state.isLoading = false;
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