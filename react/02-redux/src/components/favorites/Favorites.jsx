import React from 'react';
import useStyles from '../../jss/styles';
import {
  Card
} from '@material-ui/core';
import CityList from './content/CityList';
import CityActions from './action/CityActions';

function Favorites() {
  const classes = useStyles();

  return (
      <Card square raised classes={{
        root: classes.card
      }}>
        <CityActions />
        <CityList />
      </Card>
  )
}

export default Favorites;