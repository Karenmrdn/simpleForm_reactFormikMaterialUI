import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { todoActions } from "../../../store/slices/todo-slice";

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

  const handleSubmit = (event) => {
    event.preventDefault();

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
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        variant="outlined"
        label="Task text"
        className={classes.input}
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button type="submit" variant="contained" color="secondary">
        ADD
      </Button>
    </form>
  );
};

export default AddTodo;
