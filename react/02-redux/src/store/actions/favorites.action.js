import _ from 'lodash';
import {loadWeather} from './weather.action';

export const ADD_FAVORITE_CITY = "[favorites] Add City";

export const addFavoriteCity = (city) => {
  return (dispatch, getState) => {
    const cities = _.get(getState(), 'favorites.cities', []);
    if (cities.indexOf(city) === -1) {
      dispatch({
        type: ADD_FAVORITE_CITY,
        payload: city
      });

      dispatch(loadWeather(city));
    }
  }
};