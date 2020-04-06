import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {useParams} from 'react-router';
import {storage, weatherApi} from '../service';
import Grid from '@material-ui/core/Grid';
import {Card, CardContent, Divider, LinearProgress, Typography} from '@material-ui/core';
import ErrorMessage from '../components/weather/content/ErrorMessage';
import WeatherFrame from '../components/weather/WeatherFrame';
import useStyles from '../jss/styles';
import WeatherForecast from '../components/weather/WeatherForecast';

function CityPage() {
  const {city} = useParams();
  const classes = useStyles();
  const [loading, setLoading] = useState();
  const [currentWeather, setCurrentWeather] = useState(() =>
      _.get(storage(), `current.${city.toLowerCase()}`, {}));
  const [forecastWeather, setForecastWeather] = useState(() =>
      _.get(storage(), `forecast.${city.toLowerCase()}`, {}));

  useEffect(() => {
    const weather = weatherApi(city, setLoading);

    weather.current((current) => {
      setCurrentWeather(current);
    });
    weather.forecast((forecast) => {
      setForecastWeather(forecast);
    });
  }, [city]);

  return loading
      ? <LinearProgress variant="query"/>
      : (
          <Grid container>
            <Grid item xs={12}>
              <Card classes={{root: classes.card}}>
                <CardContent>
                  <Typography variant="h4" classes={{root: classes.listItem}}>
                    {city}
                  </Typography>
                  <Divider/>
                  {currentWeather.error
                      ? <ErrorMessage/>
                      : <WeatherFrame city={city} weather={currentWeather}/>
                  }
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" classes={{root: classes.title}}>
                Forecast:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <WeatherForecast city={city} forecast={forecastWeather}/>
            </Grid>
          </Grid>
      );
}

export default CityPage;