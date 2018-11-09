import axios from 'axios';

const API_KEY = 'b33d5d22851fb1374eb6a8ba5e1a8c4b';
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    
    return {
        type:  FETCH_WEATHER,
        payload: request
    };
    
}