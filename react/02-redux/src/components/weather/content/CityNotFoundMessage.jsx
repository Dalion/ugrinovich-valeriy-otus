import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import useStyles from '../../../jss/styles';

function CityNotFoundMessage() {
  const classes = useStyles();

  return (
      <Card classes={{root: classes.card}}>
        <CardContent>
          <Typography variant="h4">Can not find chosen city...</Typography>
        </CardContent>
      </Card>
  )
}

export default CityNotFoundMessage;