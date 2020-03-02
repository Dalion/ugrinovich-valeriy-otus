import React, {useState} from 'react';
import {
  CardActions,
  CardContent,
  DialogContent,
  Input,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/styles';

function ToDoAdd({todo = {}, onSubmit, classes}) {
  const {
    title: initialTitle,
    description: initialDescription,
    deadline: initialDeadline
  } = todo;

  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [deadline, setDeadline] = useState(initialDeadline);

  return (
      <Card square raised classes={{
        root: classes.card
      }}>
        <CardContent>
          <TextField
              label="Input title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
              label="Input description"
              value={description}
              onChange={(e) => setDescription(e.target.value) }
          />
          <TextField
              label="Input deadline"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
          />
        </CardContent>
        <CardActions>
          <Button onClick={() => {
            onSubmit({
              title: title,
              description: description,
              deadline: deadline
            })
          }}>Save</Button>
        </CardActions>
      </Card>
  )
}

export default ToDoAdd;