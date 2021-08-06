import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { todoActions } from "../../../store/todo-slice";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(1),
    },
  },
  input: {
    width: 400,
  },
}));

const AddTodo = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodoHandler = (event) => {
    if (!inputValue.trim()) {
      return;
    }

    dispatch(
      todoActions.addTodo({
        id: (Math.random() + Date.now()).toString(),
        text: inputValue,
        completed: false,
      })
    );
    setInputValue("");
  };

  return (
    <div className={classes.root}>
      <TextField
        variant="outlined"
        label="Task text"
        className={classes.input}
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button onClick={addTodoHandler} variant="contained" color="secondary">
        ADD
      </Button>
    </div>
  );
};

export default AddTodo;
