import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchActualWeather = createAsyncThunk(
    'actualData/fetchActualWeather',
    async (city: string, thunkAPI) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd1af5f7db36fcfe5990524757daff37&units=metric`)
        return response.data;
    }
)

const actualDataSlice = createSlice({
    name: 'actualData',
    initialState: {
        isLoading: false,
        hasError: false
    },
    reducers: {
        addActualData: (state,action) => action.payload
    },
    extraReducers: {
        'actualData/fetchActualWeather/pending': (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        'actualData/fetchActualWeather/fulfilled': (state, action) => {
            state['data'] = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        'actualData/fetchActualWeather/rejected': (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
    
})

export const selectActualData = (state : any) => state.actualData;

export const actualDataReducer = actualDataSlice.reducer;