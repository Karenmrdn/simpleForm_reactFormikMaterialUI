import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import catTypingGif from "../assets/gif/catTyping.gif";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
    textAlign: "center",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className={classes.wrapper}>
      <Typography variant="h3" color="primary">
        Welcome to the test application!
      </Typography>
      <img src={catTypingGif} alt="Cat typing on the laptop" />
    </div>
  );
};

export default HomePage;
