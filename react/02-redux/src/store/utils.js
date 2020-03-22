import _ from 'lodash';
import {compose} from 'redux';

export const reducerFactory = (initState, actionMap) => (state = initState, {type, payload}) => {
  const action = _.get(actionMap, type, (state) => ({
    ...state
  }));
  return action(state, payload);
};

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;