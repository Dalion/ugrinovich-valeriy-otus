import React from 'react';
import {Card, CardActions} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';

function ToDoOnBoard({todo, onDelete, classes}) {
  const {title = 'New todo', description, deadline} = todo;
  return (
      <Card classes={{root: classes.card}}>
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h5">make: {description}</Typography>
          <Divider />
          <Typography variant="h6">till: {deadline}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => onDelete()}>remove</Button>
        </CardActions>
      </Card>
  )
}

export default ToDoOnBoard;