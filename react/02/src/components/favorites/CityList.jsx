import React from 'react';
import useStyles from '../../jss/styles';
import {Typography} from '@material-ui/core';

function CityList({cities}) {
  const classes = useStyles();

  return (
      <>
        <Typography className={classes.title} variant="h3">Cities:</Typography>
        {cities.map((item, index) => (
            <Typography key={index} variant="h5" >
              {item}
            </Typography>
        ))}
      </>
  )
}

export default CityList;