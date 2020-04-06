import React from 'react';
import CityNotFoundMessage from './content/CityNotFoundMessage';
import CityWeatherMessage from './content/CityWeatherMessage';

function WeatherFrame({city, weather}) {
  const {list} = weather;
  if (list && list.length > 0) {
    const {coord, main, wind} = list[0];
    return <CityWeatherMessage
        city={city}
        coord={coord}
        main={main}
        wind={wind}
    />;
  } else {
    return <CityNotFoundMessage/>;
  }
}

export default WeatherFrame;