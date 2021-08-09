import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { Container } from "@material-ui/core";

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
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="h5"
            className={classes.title}
            style={{ fontWeight: 600 }}
          >
            TEST APP
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
          <NavLink
            to="/todo"
            className={classes.link}
            activeClassName={classes.active}
          >
            TODO
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
