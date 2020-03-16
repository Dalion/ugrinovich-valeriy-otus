import React from 'react';
import {Card, CardContent, Divider, Typography} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import useStyles from '../../../jss/styles';
import {useDispatch} from 'react-redux';
import {refreshWeather} from '../../../store/actions';

function CityWeatherMessage({city, coord = {}, main = {}, wind = {}}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRefreshClick = () => {
    dispatch(refreshWeather(city))
  };

  return (
      <Card classes={{root: classes.card}}>
        <CardContent>
          <Typography
              variant="h4"
              onClick={handleRefreshClick}
              title="Click to refresh"
              classes={{
                root: classes.listItem
              }}
          >
            {city}
            <RefreshIcon />
          </Typography>
          <Divider />
          <Typography variant="h6">Coordinates: {coord.lat} {coord.lon}</Typography>
          <Typography variant="h6">Temperature: {main.temp} °C</Typography>
          <Typography variant="h6">Pressure: {main.pressure} mm</Typography>
          <Typography variant="h6">Humidity: {main.humidity} %</Typography>
          <Typography variant="h6">Wind: {wind.speed} m/s</Typography>
        </CardContent>
      </Card>
  )
}

export default CityWeatherMessage;