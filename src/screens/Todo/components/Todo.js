import React from "react";
import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { todoActions } from "../../../store/todo-slice";

const Todo = (props) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(todoActions.toggleTodoStatus(props.id));
  };

  const handleDeleteTodo = (event) => {
    dispatch(todoActions.removeTodo(props.id));
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.completed}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label={props.text}
      />
      <Button onClick={handleDeleteTodo} color="primary">
        Delete
      </Button>
    </div>
  );
};

export default Todo;
