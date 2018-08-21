import secrets from '../config/secrets';
import axios from 'axios';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${secrets.API_KEY}`;

export const actionTypes = {
  FETCH_WEATHER: 'FETCH_WEATHER'
};

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: actionTypes.FETCH_WEATHER,
    payload: request,
  };
}