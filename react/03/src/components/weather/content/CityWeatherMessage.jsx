import React from 'react';
import {Typography} from '@material-ui/core';

function CityWeatherMessage({city, coord = {}, main = {}, wind = {}}) {
  return (
      <>
        <Typography variant="h6">Coordinates: {coord.lat} {coord.lon}</Typography>
        <Typography variant="h6">Temperature: {main.temp} °C</Typography>
        <Typography variant="h6">Pressure: {main.pressure} mm</Typography>
        <Typography variant="h6">Humidity: {main.humidity} %</Typography>
        <Typography variant="h6">Wind: {wind.speed} m/s</Typography>
      </>
  );
}

export default CityWeatherMessage;