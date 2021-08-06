import React from "react";
import {
  CardContent,
  Typography,
  Card,
  Link,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { todoActions } from "../../store/todo-slice";

const useStyles = makeStyles((theme) => ({
  control: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  card: {
    marginLeft: theme.spacing(1),
    minWidth: 275,
    maxWidth: 400,
  },
}));

const Todos = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const todoList = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      text={todo.text}
      completed={todo.completed}
    />
  ));

  const handleClear = () => {
    dispatch(todoActions.clearTodos());
  };

  return (
    <>
      <div className={classes.control}>
        <Typography variant="h3">TO-DO LIST</Typography>
        <AddTodo />
      </div>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          {todoList.length !== 0 ? todoList : "You have no tasks to do!"}
        </CardContent>
        {todoList.length !== 0 && (
          <CardActions>
            <Link component="button" variant="h6" onClick={handleClear}>
              Clear all tasks
            </Link>
          </CardActions>
        )}
      </Card>
    </>
  );
};

export default Todos;
