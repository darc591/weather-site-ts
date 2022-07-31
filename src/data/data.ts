import axios from "axios";

export interface Coords {
  latitude?: number;
  longitude?: number;
  lat?: number;
  lon?: number;
}

const API_KEY = "cd1af5f7db36fcfe5990524757daff37";

const getLocationByName = (city: string) => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`).then(async (response) => {
      Promise.all([
        getActualData(response.data[0]),
        getWeekData(response.data[0]),
      ]).then(values => console.log(values));
    });
};

const getWeekData =  (coords: Coords) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude || coords.lat}&lon=${coords.longitude || coords.lon}&appid=${API_KEY}&units=metric`) 
};

const getActualData = (coords: Coords) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude || coords.lat}&lon=${coords.longitude || coords.lon}&appid=${API_KEY}&units=metric`)
};

export const getLocation = (city?: string) => {
  if (city) {
    getLocationByName(city);
  } else if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition((position) => {
      Promise.all([
            getActualData(position.coords),
            getWeekData(position.coords),
        ]).then(values => console.log(values));
    });
  }
};
