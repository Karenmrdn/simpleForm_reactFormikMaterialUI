import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../../store/slices/todo-slice";

const Todo = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [isEdit, setIsEdit] = useState(false);
  const styles = [];

  if (props.completed) {
    styles.push("completed");
  }

  const handleChange = (event) => {
    dispatch(todoActions.toggleTodoStatus(props.id));
  };

  const handleTaskDelete = (event) => {
    dispatch(todoActions.removeTodo(props.id));
  };

  const handleTaskEdit = (event) => {
    setIsEdit(true);
  };

  const handleTaskSave = (event) => {
    event.preventDefault();

    console.log(todos);

    setIsEdit(false);
  };

  const handleTaskTextChange = (event) => {
    dispatch(
      todoActions.changeTodoText({ id: props.id, text: event.target.value })
    );
  };

  return (
    <div>
      {!isEdit ? (
        <>
          <FormControlLabel
            className={styles.join(" ")}
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
          <Button onClick={handleTaskEdit} color="primary">
            Edit
          </Button>
          <Button onClick={handleTaskDelete} color="secondary">
            Delete
          </Button>
        </>
      ) : (
        <form onSubmit={handleTaskSave}>
          <TextField
            value={props.text}
            onChange={handleTaskTextChange}
          ></TextField>
          <Button type="submit" color="primary">
            Save
          </Button>
        </form>
      )}
    </div>
  );
};

export default Todo;
