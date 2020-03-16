import * as actions from '../actions';
import {reducerFactory} from '../utils';

const initState = {
  cities: {}
};

const actionMap = {
  [actions.LOAD_CITY_WEATHER]: (state, payload) => ({
    ...state,
    cities: {
      ...state.cities,
      ...payload
    }
  }),
  [actions.REFRESH_CITY_WEATHER]: (state, payload) => ({
    ...state,
    cities: {
      ...state.cities,
      ...payload
    }
  })
};

export default reducerFactory(initState, actionMap);