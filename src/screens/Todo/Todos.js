import React from "react";
import {
  CardContent,
  Typography,
  Card,
  Link,
  CardActions,
  Button,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { todoActions } from "../../store/slices/todo-slice";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  },
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
    paddingBottom: 10,
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

  const markAllTasksHandler = (status) => {
    dispatch(todoActions.markAll(status));
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.control}>
        <Typography variant="h3" color="primary">
          To-Do list
        </Typography>
        <AddTodo />
      </div>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          {todoList.length !== 0 ? todoList : "You have no tasks to do!"}
        </CardContent>
        {todoList.length !== 0 && (
          <>
            <CardActions>
              <Button
                onClick={() => markAllTasksHandler("completed")}
                color="secondary"
                variant="outlined"
              >
                Mark all tasks as completed
              </Button>
              <Button
                onClick={() => markAllTasksHandler()}
                color="secondary"
                variant="outlined"
              >
                Mark all tasks as uncompleted
              </Button>
            </CardActions>
            <Container>
              <Link component="button" variant="h6" onClick={handleClear}>
                Delete all tasks
              </Link>
            </Container>
          </>
        )}
      </Card>
    </div>
  );
};

export default Todos;
