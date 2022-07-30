import axios from 'axios'

export interface Coords {
    latitude?: number,
    longitude?:number,
    lat?:number,
    lon?:number
}

const API_KEY = 'cd1af5f7db36fcfe5990524757daff37';

export const getLocationByName = (city :  string) =>{
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
    .then((response) => {
        getWeekData(response.data[0])
        getActualData(response.data[0])
    })
}

const getWeekData = (coords : Coords) => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude || coords.lat}&lon=${coords.longitude || coords.lon}&appid=${API_KEY}&units=metric`)
    .then(response =>console.log(response.data))
    .catch(error => console.error(error))
}

const getActualData = (coords : Coords) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude || coords.lat}&lon=${coords.longitude || coords.lon}&appid=${API_KEY}&units=metric`)
    .then((response) => console.log(response.data))
    .catch(error => console.error(error))
}


export const getLocation = (city?:string) => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            getWeekData(position.coords)
            getActualData(position.coords)
        });
    }else if(city){
        getLocationByName(city)
    }

}