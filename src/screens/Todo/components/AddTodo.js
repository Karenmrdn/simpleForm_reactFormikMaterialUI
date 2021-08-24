import React, { useState } from "react";
import { TextField, Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch } from "react-redux";
import { todoActions } from "../../../store/slices/todo-slice";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(1),
    },
  },
  inputBox: {
    marginRight: theme.spacing(1),
  },
  input: {
    width: "100%",
  },
  btn: {
    height: "100%",
    padding: 0,
    width: 36,
    borderRadius: "50%",
  },
  iconBtn: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
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
      <Box display="flex" width={400} alignItems="center">
        <Box flexGrow={1} className={classes.inputBox}>
          <TextField
            variant="outlined"
            label="Task text"
            className={classes.input}
            value={inputValue}
            onChange={handleInputChange}
          />
        </Box>
        <Box>
          <IconButton type="submit" className={classes.iconBtn}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </form>
  );
};

export default AddTodo;
