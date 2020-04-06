import React from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import WeatherFrame from '../components/weather/WeatherFrame';
import {storage} from '../service';
import ErrorMessage from '../components/weather/content/ErrorMessage';
import {Card, CardContent, Divider, Typography} from '@material-ui/core';
import useStyles from '../jss/styles';
import {Link} from 'react-router-dom';

function MainPage() {
  const classes = useStyles();
  const cities = _.get(storage(), 'favorites', []);
  const weather = _.get(storage(), 'current', {});

  return (
      <Grid container alignItems="center" justify="space-around">
        {_.map(cities, (city, index) => {
          const cityWeather = _.get(weather, `${city}`, {});
          return (
              <Grid item xs={12} md={4} key={index}>
                <Card classes={{root: classes.card}}>
                  <CardContent>
                    <Link to={`/${city}`}>
                      <Typography variant="h4" classes={{root: classes.listItem}}>
                        {city}
                      </Typography>
                    </Link>
                    <Divider/>
                    {cityWeather.error
                        ? <ErrorMessage/>
                        : <WeatherFrame city={city} weather={cityWeather}/>
                    }
                  </CardContent>
                </Card>
              </Grid>
          );
        })}
      </Grid>
  );
}

export default MainPage;