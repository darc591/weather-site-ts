import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { WeekWeatherData } from "../types/types";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "../util/metricFuncions";

export const fetchWeekWeather = createAsyncThunk(
    'weekData/fetchWeekWeather',
    async (city: string, thunkAPI) => {
        const coords = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=cd1af5f7db36fcfe5990524757daff37`)
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.data[0].lat}&lon=${coords.data[0].lon}&appid=cd1af5f7db36fcfe5990524757daff37&units=metric&lang=pt_br`)
        return response.data;
    }
)
export const fetchWeekWeatherByLocation = createAsyncThunk(
  'weekData/fetchWeekWeather',
  async (coords : {latitude: number, longitude: number}, thunkAPI) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=cd1af5f7db36fcfe5990524757daff37&units=metric&lang=pt_br`)
    return response.data
  }
)
const initialState : WeekWeatherData= {
  data:
  {
    "cod": "200",
      "message": 0,
      "cnt": 40,
      "list": [
        {
          "dt": 1660240800,
          "main": {
            "temp": 16.6,
            "feels_like": 15.96,
            "temp_min": 16.15,
            "temp_max": 16.6,
            "pressure": 1022,
            "sea_level": 1022,
            "grnd_level": 951,
            "humidity": 63,
            "temp_kf": 0.45
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.07,
            "deg": 78,
            "gust": 3.3
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-11 18:00:00"
        },
        {
          "dt": 1660251600,
          "main": {
            "temp": 14.79,
            "feels_like": 14.18,
            "temp_min": 11.18,
            "temp_max": 14.79,
            "pressure": 1022,
            "sea_level": 1022,
            "grnd_level": 950,
            "humidity": 71,
            "temp_kf": 3.61
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.25,
            "deg": 84,
            "gust": 1.32
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-11 21:00:00"
        },
        {
          "dt": 1660262400,
          "main": {
            "temp": 11.31,
            "feels_like": 10.66,
            "temp_min": 8.67,
            "temp_max": 11.31,
            "pressure": 1023,
            "sea_level": 1023,
            "grnd_level": 951,
            "humidity": 83,
            "temp_kf": 2.64
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.5,
            "deg": 90,
            "gust": 1.58
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-12 00:00:00"
        },
        {
          "dt": 1660273200,
          "main": {
            "temp": 8.05,
            "feels_like": 6.69,
            "temp_min": 8.05,
            "temp_max": 8.05,
            "pressure": 1024,
            "sea_level": 1024,
            "grnd_level": 951,
            "humidity": 91,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.27,
            "deg": 72,
            "gust": 5.84
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-12 03:00:00"
        },
        {
          "dt": 1660284000,
          "main": {
            "temp": 7.71,
            "feels_like": 6.1,
            "temp_min": 7.71,
            "temp_max": 7.71,
            "pressure": 1023,
            "sea_level": 1023,
            "grnd_level": 950,
            "humidity": 92,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.52,
            "deg": 54,
            "gust": 6.67
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-12 06:00:00"
        },
        {
          "dt": 1660294800,
          "main": {
            "temp": 7.53,
            "feels_like": 5.65,
            "temp_min": 7.53,
            "temp_max": 7.53,
            "pressure": 1023,
            "sea_level": 1023,
            "grnd_level": 951,
            "humidity": 92,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "céu limpo",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 6
          },
          "wind": {
            "speed": 2.84,
            "deg": 51,
            "gust": 9.42
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-12 09:00:00"
        },
        {
          "dt": 1660305600,
          "main": {
            "temp": 10.99,
            "feels_like": 10.36,
            "temp_min": 10.99,
            "temp_max": 10.99,
            "pressure": 1024,
            "sea_level": 1024,
            "grnd_level": 952,
            "humidity": 85,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "algumas nuvens",
              "icon": "02d"
            }
          ],
          "clouds": {
            "all": 22
          },
          "wind": {
            "speed": 4.42,
            "deg": 39,
            "gust": 11.74
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-12 12:00:00"
        },
        {
          "dt": 1660316400,
          "main": {
            "temp": 15.15,
            "feels_like": 14.55,
            "temp_min": 15.15,
            "temp_max": 15.15,
            "pressure": 1023,
            "sea_level": 1023,
            "grnd_level": 952,
            "humidity": 70,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 99
          },
          "wind": {
            "speed": 4.33,
            "deg": 31,
            "gust": 6.17
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-12 15:00:00"
        },
        {
          "dt": 1660327200,
          "main": {
            "temp": 16.29,
            "feels_like": 15.78,
            "temp_min": 16.29,
            "temp_max": 16.29,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 949,
            "humidity": 69,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 99
          },
          "wind": {
            "speed": 3.43,
            "deg": 35,
            "gust": 5.26
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-12 18:00:00"
        },
        {
          "dt": 1660338000,
          "main": {
            "temp": 12.21,
            "feels_like": 11.86,
            "temp_min": 12.21,
            "temp_max": 12.21,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 948,
            "humidity": 91,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 1.46,
            "deg": 64,
            "gust": 1.67
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-12 21:00:00"
        },
        {
          "dt": 1660348800,
          "main": {
            "temp": 10.77,
            "feels_like": 10.36,
            "temp_min": 10.77,
            "temp_max": 10.77,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 949,
            "humidity": 94,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.83,
            "deg": 71,
            "gust": 10.19
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-13 00:00:00"
        },
        {
          "dt": 1660359600,
          "main": {
            "temp": 11.34,
            "feels_like": 10.78,
            "temp_min": 11.34,
            "temp_max": 11.34,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 949,
            "humidity": 86,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 4.12,
            "deg": 45,
            "gust": 13.55
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-13 03:00:00"
        },
        {
          "dt": 1660370400,
          "main": {
            "temp": 10.51,
            "feels_like": 9.99,
            "temp_min": 10.51,
            "temp_max": 10.51,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 949,
            "humidity": 91,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 4.14,
            "deg": 39,
            "gust": 12.24
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-13 06:00:00"
        },
        {
          "dt": 1660381200,
          "main": {
            "temp": 10.11,
            "feels_like": 9.53,
            "temp_min": 10.11,
            "temp_max": 10.11,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 949,
            "humidity": 90,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 3.42,
            "deg": 48,
            "gust": 9.65
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-13 09:00:00"
        },
        {
          "dt": 1660392000,
          "main": {
            "temp": 12.11,
            "feels_like": 11.54,
            "temp_min": 12.11,
            "temp_max": 12.11,
            "pressure": 1022,
            "sea_level": 1022,
            "grnd_level": 950,
            "humidity": 83,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 3.37,
            "deg": 45,
            "gust": 9.64
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-13 12:00:00"
        },
        {
          "dt": 1660402800,
          "main": {
            "temp": 15.67,
            "feels_like": 15.22,
            "temp_min": 15.67,
            "temp_max": 15.67,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 950,
            "humidity": 74,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 3,
            "deg": 22,
            "gust": 5.95
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-13 15:00:00"
        },
        {
          "dt": 1660413600,
          "main": {
            "temp": 17.46,
            "feels_like": 17.14,
            "temp_min": 17.46,
            "temp_max": 17.46,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 949,
            "humidity": 72,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.3,
            "deg": 13,
            "gust": 4
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-13 18:00:00"
        },
        {
          "dt": 1660424400,
          "main": {
            "temp": 13.67,
            "feels_like": 13.47,
            "temp_min": 13.67,
            "temp_max": 13.67,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 948,
            "humidity": 91,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 99
          },
          "wind": {
            "speed": 1.44,
            "deg": 70,
            "gust": 1.49
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-13 21:00:00"
        },
        {
          "dt": 1660435200,
          "main": {
            "temp": 11.59,
            "feels_like": 11.23,
            "temp_min": 11.59,
            "temp_max": 11.59,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 948,
            "humidity": 93,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 82
          },
          "wind": {
            "speed": 1.6,
            "deg": 83,
            "gust": 1.74
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-14 00:00:00"
        },
        {
          "dt": 1660446000,
          "main": {
            "temp": 10.87,
            "feels_like": 10.44,
            "temp_min": 10.87,
            "temp_max": 10.87,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 948,
            "humidity": 93,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 91
          },
          "wind": {
            "speed": 1.83,
            "deg": 83,
            "gust": 3.29
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-14 03:00:00"
        },
        {
          "dt": 1660456800,
          "main": {
            "temp": 10.68,
            "feels_like": 10.26,
            "temp_min": 10.68,
            "temp_max": 10.68,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 947,
            "humidity": 94,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 83
          },
          "wind": {
            "speed": 1.82,
            "deg": 68,
            "gust": 4.09
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-14 06:00:00"
        },
        {
          "dt": 1660467600,
          "main": {
            "temp": 11.21,
            "feels_like": 10.76,
            "temp_min": 11.21,
            "temp_max": 11.21,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 946,
            "humidity": 91,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 78
          },
          "wind": {
            "speed": 2.27,
            "deg": 58,
            "gust": 5.14
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-14 09:00:00"
        },
        {
          "dt": 1660478400,
          "main": {
            "temp": 14.27,
            "feels_like": 13.95,
            "temp_min": 14.27,
            "temp_max": 14.27,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 946,
            "humidity": 84,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 68
          },
          "wind": {
            "speed": 1.97,
            "deg": 56,
            "gust": 7.17
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-14 12:00:00"
        },
        {
          "dt": 1660489200,
          "main": {
            "temp": 19.8,
            "feels_like": 19.56,
            "temp_min": 19.8,
            "temp_max": 19.8,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 946,
            "humidity": 66,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.9,
            "deg": 21,
            "gust": 5.76
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-14 15:00:00"
        },
        {
          "dt": 1660500000,
          "main": {
            "temp": 15.09,
            "feels_like": 15.11,
            "temp_min": 15.09,
            "temp_max": 15.09,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 944,
            "humidity": 94,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.89,
            "deg": 54,
            "gust": 6.29
          },
          "visibility": 10000,
          "pop": 0.59,
          "rain": {
            "3h": 1.44
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-14 18:00:00"
        },
        {
          "dt": 1660510800,
          "main": {
            "temp": 15.1,
            "feels_like": 15.07,
            "temp_min": 15.1,
            "temp_max": 15.1,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 942,
            "humidity": 92,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.71,
            "deg": 63,
            "gust": 7.39
          },
          "visibility": 10000,
          "pop": 0.26,
          "rain": {
            "3h": 0.24
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-14 21:00:00"
        },
        {
          "dt": 1660521600,
          "main": {
            "temp": 14.95,
            "feels_like": 14.88,
            "temp_min": 14.95,
            "temp_max": 14.95,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 942,
            "humidity": 91,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10n"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.8,
            "deg": 63,
            "gust": 8.71
          },
          "visibility": 10000,
          "pop": 0.29,
          "rain": {
            "3h": 0.17
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-15 00:00:00"
        },
        {
          "dt": 1660532400,
          "main": {
            "temp": 15.94,
            "feels_like": 15.86,
            "temp_min": 15.94,
            "temp_max": 15.94,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 941,
            "humidity": 87,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10n"
            }
          ],
          "clouds": {
            "all": 88
          },
          "wind": {
            "speed": 3.03,
            "deg": 29,
            "gust": 11.33
          },
          "visibility": 10000,
          "pop": 0.24,
          "rain": {
            "3h": 0.28
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-15 03:00:00"
        },
        {
          "dt": 1660543200,
          "main": {
            "temp": 15.97,
            "feels_like": 15.74,
            "temp_min": 15.97,
            "temp_max": 15.97,
            "pressure": 1007,
            "sea_level": 1007,
            "grnd_level": 938,
            "humidity": 81,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 94
          },
          "wind": {
            "speed": 3.2,
            "deg": 37,
            "gust": 9.72
          },
          "visibility": 10000,
          "pop": 0.19,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-15 06:00:00"
        },
        {
          "dt": 1660554000,
          "main": {
            "temp": 16.03,
            "feels_like": 15.86,
            "temp_min": 16.03,
            "temp_max": 16.03,
            "pressure": 1006,
            "sea_level": 1006,
            "grnd_level": 937,
            "humidity": 83,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10n"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.84,
            "deg": 56,
            "gust": 8.73
          },
          "visibility": 10000,
          "pop": 0.36,
          "rain": {
            "3h": 0.16
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-15 09:00:00"
        },
        {
          "dt": 1660564800,
          "main": {
            "temp": 16.22,
            "feels_like": 16.33,
            "temp_min": 16.22,
            "temp_max": 16.22,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 940,
            "humidity": 93,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 1.53,
            "deg": 138,
            "gust": 3.04
          },
          "visibility": 10000,
          "pop": 0.55,
          "rain": {
            "3h": 0.41
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-15 12:00:00"
        },
        {
          "dt": 1660575600,
          "main": {
            "temp": 17.69,
            "feels_like": 17.86,
            "temp_min": 17.69,
            "temp_max": 17.69,
            "pressure": 1007,
            "sea_level": 1007,
            "grnd_level": 938,
            "humidity": 90,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.14,
            "deg": 62,
            "gust": 7.08
          },
          "visibility": 10000,
          "pop": 0.68,
          "rain": {
            "3h": 0.69
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-15 15:00:00"
        },
        {
          "dt": 1660586400,
          "main": {
            "temp": 22,
            "feels_like": 21.98,
            "temp_min": 22,
            "temp_max": 22,
            "pressure": 1003,
            "sea_level": 1003,
            "grnd_level": 935,
            "humidity": 66,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 6.43,
            "deg": 359,
            "gust": 17.7
          },
          "visibility": 10000,
          "pop": 0.4,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-15 18:00:00"
        },
        {
          "dt": 1660597200,
          "main": {
            "temp": 16.72,
            "feels_like": 16.82,
            "temp_min": 16.72,
            "temp_max": 16.72,
            "pressure": 1005,
            "sea_level": 1005,
            "grnd_level": 936,
            "humidity": 91,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 94
          },
          "wind": {
            "speed": 3.17,
            "deg": 319,
            "gust": 10.94
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
            "3h": 1.92
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-15 21:00:00"
        },
        {
          "dt": 1660608000,
          "main": {
            "temp": 15.58,
            "feels_like": 15.62,
            "temp_min": 15.58,
            "temp_max": 15.58,
            "pressure": 1007,
            "sea_level": 1007,
            "grnd_level": 937,
            "humidity": 93,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10n"
            }
          ],
          "clouds": {
            "all": 81
          },
          "wind": {
            "speed": 2.75,
            "deg": 351,
            "gust": 9.99
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
            "3h": 2.02
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-16 00:00:00"
        },
        {
          "dt": 1660618800,
          "main": {
            "temp": 15,
            "feels_like": 15.14,
            "temp_min": 15,
            "temp_max": 15,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 939,
            "humidity": 99,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "chuva moderada",
              "icon": "10n"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.17,
            "deg": 334,
            "gust": 11.82
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
            "3h": 6.32
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-16 03:00:00"
        },
        {
          "dt": 1660629600,
          "main": {
            "temp": 14.23,
            "feels_like": 14.27,
            "temp_min": 14.23,
            "temp_max": 14.23,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 939,
            "humidity": 98,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "chuva leve",
              "icon": "10n"
            }
          ],
          "clouds": {
            "all": 85
          },
          "wind": {
            "speed": 1.3,
            "deg": 335,
            "gust": 2.47
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
            "3h": 0.15
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-16 06:00:00"
        },
        {
          "dt": 1660640400,
          "main": {
            "temp": 14.44,
            "feels_like": 14.52,
            "temp_min": 14.44,
            "temp_max": 14.44,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 940,
            "humidity": 99,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 89
          },
          "wind": {
            "speed": 1.24,
            "deg": 93,
            "gust": 2.71
          },
          "visibility": 9435,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2022-08-16 09:00:00"
        },
        {
          "dt": 1660651200,
          "main": {
            "temp": 14.58,
            "feels_like": 14.63,
            "temp_min": 14.58,
            "temp_max": 14.58,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 942,
            "humidity": 97,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 93
          },
          "wind": {
            "speed": 1.76,
            "deg": 110,
            "gust": 3.14
          },
          "visibility": 5586,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-16 12:00:00"
        },
        {
          "dt": 1660662000,
          "main": {
            "temp": 20.04,
            "feels_like": 20.24,
            "temp_min": 20.04,
            "temp_max": 20.04,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 941,
            "humidity": 82,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "nublado",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 71
          },
          "wind": {
            "speed": 1.94,
            "deg": 93,
            "gust": 2.79
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-08-16 15:00:00"
        }
      ],
      "city": {
        "id": 3457817,
        "name": "Marau",
        "coord": {
          "lat": -28.445,
          "lon": -52.2221
        },
        "country": "BR",
        "population": 26860,
        "timezone": -10800,
        "sunrise": 1660212250,
        "sunset": 1660251850
      }
  },
  isLoading: true,
  hasError: false,
  metrics: 'C'
}


const weekDataSlice = createSlice({
    name: 'weekData',
    initialState: initialState,
    reducers: {
        addWeekData: (state,action) => action.payload,

        changeWeekMetrics: (state, action) => {
          if(state.metrics === action.payload) return
          state.metrics = action.payload
          if(action.payload === 'C'){
            state.data.list.forEach(day => {
              day.main.temp = fahrenheitToCelsius(day.main.temp)
              day.main.temp_min = fahrenheitToCelsius(day.main.temp_min)
              day.main.temp_max = fahrenheitToCelsius(day.main.temp_max)
            })
          }
          if(action.payload === 'F'){
            state.data.list.forEach(day => {
              day.main.temp = celsiusToFahrenheit(day.main.temp)
              day.main.temp_min = celsiusToFahrenheit(day.main.temp_min)
              day.main.temp_max = celsiusToFahrenheit(day.main.temp_max)
            })
          }
        }
    },
    extraReducers: {
        'weekData/fetchWeekWeather/pending': (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        'weekData/fetchWeekWeather/fulfilled': (state, action) => {
            state.data = action.payload;
            state.metrics = 'C';
            state.isLoading = false;
            state.hasError = false;
        },
        'weekData/fetchWeekWeather/rejected': (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
    
    
})

export const {changeWeekMetrics} = weekDataSlice.actions;
export const selectWeekData = (state :  {weekData: WeekWeatherData}) => state.weekData;
export const weekDataReducer = weekDataSlice.reducer;