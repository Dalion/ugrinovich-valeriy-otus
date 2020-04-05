import React, {useState} from 'react';
import {Button, CardActions, TextField} from '@material-ui/core';
import useStyles from '../../jss/styles';

function CityActions({handleAddCity}) {
  const classes = useStyles();
  const [cityName, setCityName] = useState('');

  return (
      <CardActions classes={{root: classes.cardActions}}>
        <TextField
            label="Input city name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            onKeyUp={(e) => e.which === 13 && handleAddCity(cityName)}
        />
        <Button variant="contained" onClick={() => handleAddCity(cityName)}>Add</Button>
      </CardActions>
  );
}

export default CityActions;