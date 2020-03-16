import * as actions from '../actions';
import {reducerFactory} from '../utils';

const initState = {
  cities: []
};

const actionMap = {
  [actions.ADD_FAVORITE_CITY]: (state, payload) => ({
    ...state,
    cities: [
        ...state.cities,
        payload
    ]
  })
};

export default reducerFactory(initState, actionMap);