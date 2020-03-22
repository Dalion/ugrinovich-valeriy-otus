import React from 'react';
import useStyles from '../../../jss/styles';
import {CardContent, Typography} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';

function CityList() {
  const classes = useStyles();
  const cities = useSelector(({favorites}) => favorites.cities);

  return (
      <CardContent>
        <Typography className={classes.title} variant="h3">Cities:</Typography>
        {cities.map((city, index) => {
          return (
              <Typography key={index} variant="h5" >
                {city}
              </Typography>
          )
        })}
      </CardContent>
  )
}

export default CityList;