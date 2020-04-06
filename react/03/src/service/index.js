import axios from 'axios';
import _ from 'lodash';

export const weatherApi = (city, setLoading) => {
  const currentApi = axios.get(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${process.env.API_KEY}`);
  const forecastApi = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&units=metric&appid=${process.env.API_KEY}`);
  return {
    current: (onSuccess, onError = (e) => console.log(e)) => {
      setLoading(true);

      currentApi
      .then((res) => {
        const currentCityWeather = res.data;
        const current = _.get(storage(), 'current', {});
        localStorage.setItem("weatherApp", JSON.stringify({
          ...storage(),
          "current": {
            ...current,
            [city]: {
              ...currentCityWeather
            }
          }
        }));
        return currentCityWeather;
      })
      .then((currentCityWeather) => {
        if (_.isFunction(onSuccess)) {
          onSuccess(currentCityWeather)
        }
      })
      .then(() => setLoading(false))
      .catch((e) => {
        if (_.isFunction(onError)) {
          onError(e)
        }
        setLoading(false)
      });
    },
    forecast: (onSuccess, onError = (e) => console.log(e)) => {
      setLoading(true);

      forecastApi
      .then((res) => {
        const forecastCityWeather = res.data;
        if (_.isFunction(onSuccess)) {
          onSuccess(forecastCityWeather)
        }
        const forecast = _.get(storage(), 'forecast', {});
        localStorage.setItem("weatherApp", JSON.stringify({
          ...storage(),
          "forecast": {
            ...forecast,
            [city]: {
              ...forecastCityWeather
            }
          }
        }))
      })
      .then(() => setLoading(false))
      .catch((e) => {
        if (_.isFunction(onError)) {
          onError(e)
        }
        setLoading(false)
      });
    }
  }
};

export const storage = () => JSON.parse(localStorage.getItem("weatherApp")) || {};