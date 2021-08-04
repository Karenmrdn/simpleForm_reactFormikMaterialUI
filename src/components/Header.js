import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    margin: 5,
  },
  active: {
    fontWeight: "bold",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Test app
          </Typography>
          <NavLink
            to="/users"
            className={classes.link}
            activeClassName={classes.active}
          >
            USERS
          </NavLink>
          <NavLink
            to="/main-form"
            className={classes.link}
            activeClassName={classes.active}
          >
            FORM
          </NavLink>
          <NavLink
            to="/class-form"
            className={classes.link}
            activeClassName={classes.active}
          >
            CLASSFORM
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
