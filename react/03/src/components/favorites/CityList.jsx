import React from 'react';
import useStyles from '../../jss/styles';
import {CardContent, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

function CityList({cities}) {
  const classes = useStyles();

  return (
      <CardContent>
        <Typography className={classes.title} variant="h3">Cities:</Typography>
        {cities.map((city, index) => {
          return (
              <Link to={`/${city}`} key={index}>
                <Typography variant="h5">
                  {city}
                </Typography>
              </Link>
          );
        })}
      </CardContent>
  );
}

export default CityList;