import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink, Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth-slice";
import { useHistory } from "react-router";

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
  logoutBtn: {
    margin: 5,
  },
}));

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(authActions.logout());
    history.replace("/");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h5"
            className={classes.title}
            style={{ fontWeight: 600 }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              TEST APP
            </Link>
          </Typography>
          {isLoggedIn && (
            <>
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
              <NavLink
                to="/cats"
                className={classes.link}
                activeClassName={classes.active}
              >
                CATS
              </NavLink>
              <Button
                onClick={handleLogout}
                variant="contained"
                color="secondary"
                className={classes.logoutBtn}
              >
                Logout
              </Button>
            </>
          )}
          {!isLoggedIn && (
            <NavLink
              to="/auth"
              className={classes.link}
              activeClassName={classes.active}
            >
              <Typography>AUTH</Typography>
            </NavLink>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
