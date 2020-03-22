import React, {useState} from 'react';
import useStyles from '../../jss/styles';
import {
  CardActions,
  CardContent,
  TextField,
  Button,
  Card
} from '@material-ui/core';
import CityList from './CityList';

function CityFavorites({cities = [], onSubmit}) {
  const [cityName, setCityName] = useState('');
  const classes = useStyles();

  const handleAddCity = () => {
    if (cityName) {
      onSubmit(cityName);
    }
  };

  const handleKeyUp = (e) => {
    if (e.which === 13) {
      handleAddCity();
    }
  };

  return (
      <Card square raised classes={{
        root: classes.card
      }}>
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
        <CardContent>
          <CityList cities={cities} />
        </CardContent>
      </Card>
  )
}

export default CityFavorites;