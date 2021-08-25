import React, { useCallback } from "react";
import {
  CardContent,
  Typography,
  Card,
  Link,
  CardActions,
  Button,
  Container,
  Slide,
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

  const handleClear = () => {
    dispatch(todoActions.clearTodos());
  };

  const markAllTasksHandler = (status) => {
    dispatch(todoActions.markAll(status));
  };

  const moveTodo = useCallback(
    (dragIndex, hoverIndex) => {
      dispatch(todoActions.changeTodoOrder({ dragIndex, hoverIndex }));
    },
    [dispatch]
  ); // DnD

  const todoList = todos.map((todo, index) => (
    <Slide
      key={todo.id}
      in={todo.fade}
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      <div>
        <Todo
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          index={index} // DnD
          moveTodo={moveTodo} // DnD
        />
      </div>
    </Slide>
  ));

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
                onClick={() => markAllTasksHandler()}
                color="secondary"
                variant="outlined"
              >
                Mark all tasks as uncompleted
              </Button>
              <Button
                onClick={() => markAllTasksHandler("completed")}
                color="secondary"
                variant="outlined"
              >
                Mark all tasks as completed
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
