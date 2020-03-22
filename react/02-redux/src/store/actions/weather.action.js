import _ from 'lodash';

export const LOAD_CITY_WEATHER = "[weather] Load city weather";
export const REFRESH_CITY_WEATHER = "[weather] Refresh city weather";

export const loadWeather = (city) => {
  return (dispatch, getState, weatherApi) => {
    const cityWeather = weatherApi(city);
    const onSuccess = (res) => dispatch({
      type: LOAD_CITY_WEATHER,
      payload: {
        [city]: res.data
      }
    });

    cityWeather.get(
        onSuccess
    );
  }
};

export const refreshWeather = (city) => {
  return (dispatch, getState, weatherApi) => {
    const citiesWeather = _.get(getState(), 'weather.cities', {});
    const cityWeather = weatherApi(city);
    const onSuccess = (res) => {
      citiesWeather[city] = res.data;
      dispatch({
        type: REFRESH_CITY_WEATHER,
        payload: citiesWeather
      })
    };

    cityWeather.get(
      onSuccess
    );
  }
};