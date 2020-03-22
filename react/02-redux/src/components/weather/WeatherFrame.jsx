import React from 'react';
import ErrorMessage from './content/ErrorMessage';
import CityNotFoundMessage from './content/CityNotFoundMessage';
import CityWeatherMessage from './content/CityWeatherMessage';

function WeatherFrame({city, weather}) {
  if (weather.error) {
    return <ErrorMessage />
  } else {
    const {list} = weather;
    if (list && list.length > 0) {
      const {coord, main, wind} = list[0];
      return <CityWeatherMessage
        city={city}
        coord={coord}
        main={main}
        wind={wind}
      />
    } else {
      return <CityNotFoundMessage />
    }
  }
}

export default WeatherFrame;