import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { Button, Container, Link } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth-slice";
import { useHistory } from "react-router";
import { Link as RouterLink } from "react-router-dom";

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
  const logoutTimerId = useSelector((state) => state.auth.logoutTimerId);

  const handleLogout = () => {
    dispatch(authActions.logout());

    clearTimeout(logoutTimerId);

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
            <RouterLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              TEST APP
            </RouterLink>
          </Typography>
          {isLoggedIn && (
            <>
              <Link
                component={NavLink}
                to="/users"
                color="inherit"
                className={classes.link}
                activeClassName={classes.active}
              >
                USERS
              </Link>
              <Link
                component={NavLink}
                to="/main-form"
                color="inherit"
                className={classes.link}
                activeClassName={classes.active}
              >
                FORM
              </Link>
              <Link
                component={NavLink}
                to="/class-form"
                color="inherit"
                className={classes.link}
                activeClassName={classes.active}
              >
                CLASSFORM
              </Link>
              <Link
                component={NavLink}
                to="/todo"
                color="inherit"
                className={classes.link}
                activeClassName={classes.active}
              >
                TODO
              </Link>
              <Link
                component={NavLink}
                to="/cats"
                color="inherit"
                className={classes.link}
                activeClassName={classes.active}
              >
                CATS
              </Link>
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
            <Link
              component={NavLink}
              to="/auth"
              color="inherit"
              className={classes.link}
              activeClassName={classes.active}
            >
              AUTH
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
