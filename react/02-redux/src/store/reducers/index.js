import {combineReducers} from 'redux';
import favorites from './favorites.reducer';
import weather from './weather.reducer';

export default combineReducers({
  favorites,
  weather
});