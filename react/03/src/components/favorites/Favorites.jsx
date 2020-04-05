import React, {useEffect, useState} from 'react';
import {Card} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CityActions from './CityActions';
import CityList from './CityList';
import useStyles from '../../jss/styles';
import _ from 'lodash';
import {storage, weatherApi} from '../../service';

function Favorites({setLoading}) {
  const classes = useStyles();
  const [favorites, setFavorites] = useState(() => _.get(storage(), 'favorites', []));

  const handleAddCity = (cityName) => {
    if (cityName) {
      const city = cityName.toLowerCase();
      if (favorites.indexOf(city) === -1) {
        const weather = weatherApi(city, setLoading);

        weather.current(() => {
          setFavorites([
            ...favorites,
            city,
          ]);
        });
      }
    }
  };

  useEffect(() => {
    localStorage.setItem('weatherApp', JSON.stringify({
      ...storage(),
      'favorites': favorites,
    }));
  }, [favorites]);

  return (
      <Card square raised classes={{root: classes.card}}>
        <Link to="/">
          <Typography className={classes.homeTitle} variant="h3">Home</Typography>
        </Link>
        <CityActions handleAddCity={handleAddCity}/>
        <CityList cities={favorites}/>
      </Card>
  );
}

export default Favorites;