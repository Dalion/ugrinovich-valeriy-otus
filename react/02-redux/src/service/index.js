import axios from 'axios';

export const weatherApi = (city) => {
  const api = axios.get(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${process.env.API_KEY}`);
  return {
    get: (onSuccess, onError = (e) => console.log(e)) => {
      api
      .then(onSuccess)
      .catch(onError);
    }
  }
};