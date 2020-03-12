import React from 'react';
import withWeather from '../hoc/withWeather';
import CityWeatherInfo from './CityWeatherInfo';

export default ({city}) => withWeather(CityWeatherInfo, city)