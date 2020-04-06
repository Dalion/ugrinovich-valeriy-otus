import React from 'react';
import {Card, CardContent, Divider, GridList, GridListTile, Typography} from '@material-ui/core';
import _ from 'lodash';
import moment from 'moment';
import CityWeatherMessage from './content/CityWeatherMessage';
import useStyles from '../../jss/styles';

function WeatherForecast({forecast, city}) {
  const classes = useStyles();

  return (
      <div className={classes.forecastRoot}>
        <GridList className={classes.forecastGridList} cols={3.5} cellHeight="auto">
          {_.map(forecast.list, ({dt, main, wind}, index) => {
            const dateTime = moment.unix(dt).format("LLL");
            return (
                <GridListTile key={index}>
                  <Card classes={{root: classes.card}}>
                    <CardContent>
                      <Typography variant="h5" classes={{root: classes.listItem}}>
                        {dateTime}
                      </Typography>
                      <Divider/>
                      <CityWeatherMessage city={city} wind={wind} main={main} coord={forecast.city.coord}/>
                    </CardContent>
                  </Card>
                </GridListTile>
            );
          })}
        </GridList>
      </div>
  )
}

export default WeatherForecast;