import React from 'react';
import {CardContent, Divider, Typography} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import useStyles from '../../jss/styles';

function CityWeatherInfo({cityWeatherInfo, refreshInfo}) {
  const classes = useStyles();

  if (cityWeatherInfo.error) {
    return (
        <CardContent>
          <Typography variant="h4">Oops, something went wrong...</Typography>
        </CardContent>
    )
  } else {
    const {list} = cityWeatherInfo;
    if (list && list.length > 0) {
      const {name, coord = {}, main = {}, wind = {}} = list[0];
      return (
          <CardContent>
            <Typography
                variant="h4"
                onClick={refreshInfo}
                title="Click to refresh"
                classes={{
                  root: classes.listItem
                }}
            >
              {name}
              <RefreshIcon />
            </Typography>
            <Divider />
            <Typography variant="h6">Coordinates: {coord.lat} {coord.lon}</Typography>
            <Typography variant="h6">Temperature: {main.temp} °C</Typography>
            <Typography variant="h6">Pressure: {main.pressure} mm</Typography>
            <Typography variant="h6">Humidity: {main.humidity} %</Typography>
            <Typography variant="h6">Wind: {wind.speed} m/s</Typography>
          </CardContent>
      )
    } else {
      return (
          <CardContent>
            <Typography variant="h4">Can not find chosen city...</Typography>
          </CardContent>
      )
    }
  }
}

export default CityWeatherInfo;