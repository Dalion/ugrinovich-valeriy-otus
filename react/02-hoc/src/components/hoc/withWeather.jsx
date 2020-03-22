import React, {useState, useEffect} from 'react';
import useStyles from '../../jss/styles';
import {
  Card,
  CardContent
} from '@material-ui/core';
import axios from 'axios';

const withWeather = (Component, city) => {
  const [cityInfo, setCityInfo] = useState({});
  const classes = useStyles();

  const fetchCity = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${process.env.API_KEY}`)
        .then((res) => {
          setCityInfo(res.data)
    })
  };

  useEffect(fetchCity, [city]);

  return (
      <Card classes={{root: classes.card}}>
        <CardContent>
          <Component cityWeatherInfo={cityInfo} refreshInfo={fetchCity}/>
        </CardContent>
      </Card>
  )
};

export default withWeather;