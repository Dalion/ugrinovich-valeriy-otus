import React, {useState} from 'react';
import ToDoOnBoard from './ToDoOnBoard';
import ToDoAdd from './ToDoAdd';
import {makeStyles} from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  card: {
    minWidth: '235px',
    maxWidth: '235px',
    margin: '16px'
  },
  title: {
    margin: '16px'
  }
});

function ToDoBoard() {
  const [todos, setTodos] = useState([]);
  const classes = useStyles();

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos([...newTodos]);
  };

  return (
      <div className={classes.root}>
        <ToDoAdd onSubmit={handleAdd} classes={classes} />
        <Typography className={classes.title} variant="h3">To do:</Typography>
        <Grid container>
          {todos.map((todo, index) =>
          <Grid item xs={12} sm={2}>
            <ToDoOnBoard
                key={index}
                todo={todo}
                onDelete={() => handleDelete(index)}
                classes={classes}
            />
          </Grid>)}
        </Grid>
      </div>
  )
}

export default ToDoBoard