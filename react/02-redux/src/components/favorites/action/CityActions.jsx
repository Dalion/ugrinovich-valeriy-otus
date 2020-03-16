import React, {useState} from 'react';
import {Button, CardActions, TextField} from '@material-ui/core';
import {addFavoriteCity} from '../../../store/actions';
import {useDispatch} from 'react-redux';
import useStyles from '../../../jss/styles';

function CityActions() {
  const classes = useStyles();
  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch();

  const handleAddCity = () => {
    if (cityName) {
      dispatch(addFavoriteCity(cityName))
    }
  };

  const handleKeyUp = (e) => {
    if (e.which === 13) {
      handleAddCity();
    }
  };
  return (
      <CardActions classes={{
        root: classes.cardActions
      }}>
        <TextField
            label="Input city name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            onKeyUp={handleKeyUp}
        />
        <Button variant="contained" onClick={handleAddCity}>Add</Button>
      </CardActions>
  )
}

export default CityActions;