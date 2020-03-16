import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import useStyles from '../../../jss/styles';

function ErrorMessage() {
  const classes = useStyles();

  return (
      <Card classes={{root: classes.card}}>
        <CardContent>
          <Typography variant="h4">Oops, something went wrong...</Typography>
        </CardContent>
      </Card>
  )
}

export default ErrorMessage;