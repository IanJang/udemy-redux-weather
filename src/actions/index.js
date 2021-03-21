import axios from 'axios';

const API_KEY = ''
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName, countryCode = 'us') {
    const url = `${ROOT_URL}&q=${cityName},${countryCode}`
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
