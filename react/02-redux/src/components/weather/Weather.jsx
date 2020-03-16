import React from 'react';
import {useSelector} from 'react-redux';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import WeatherFrame from './WeatherFrame';

function Weather() {
  const cities = useSelector(({weather}) => weather.cities);

  return (
      <>
        {_.map(_.keys(cities), (city, index) => (
            <Grid item xs={12} md={3} key={index}>
              <WeatherFrame city={city} weather={cities[city]}/>
            </Grid>
        ))}
      </>
  )
}

export default Weather;