import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import {
  Button,
  Container,
  Link,
  useMediaQuery,
  Menu,
  MenuItem,
  IconButton,
  Zoom,
  Slide,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth-slice";
import { useHistory } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    fontWeight: 600,
  },
  mainLink: {
    textDecoration: "none",
    color: "inherit",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    margin: 5,
  },
  active: {
    fontWeight: "bold",
  },
  activeMenuItem: {
    color: "#fff",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  logoutBtn: {
    margin: 5,
  },
}));

const Navigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const logoutTimerId = useSelector((state) => state.auth.logoutTimerId);

  const [anchor, setAnchor] = useState(null);
  const isFullscreen = useMediaQuery("(min-width:660px)");

  const handleMenuOpen = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchor(null);
  };

  const handleLogout = () => {
    dispatch(authActions.logout());

    clearTimeout(logoutTimerId);

    history.replace("/");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <RouterLink to="/" className={classes.mainLink}>
              TEST APP
            </RouterLink>
          </Typography>
          {isLoggedIn && (
            <>
              {isFullscreen ? (
                <Zoom in={isFullscreen} mountOnEnter unmountOnExit>
                  <div>
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
                  </div>
                </Zoom>
              ) : (
                <Slide
                  direction="right"
                  in={!isFullscreen}
                  mountOnEnter
                  unmountOnExit
                >
                  <div>
                    <IconButton
                      color="inherit"
                      className={classes.menuButton}
                      edge="start"
                      aria-label="menu"
                      onClick={handleMenuOpen}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchor}
                      keepMounted
                      open={Boolean(anchor)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem
                        onClick={handleMenuClose}
                        component={NavLink}
                        activeClassName={classes.activeMenuItem}
                        to="/users"
                      >
                        USERS
                      </MenuItem>
                      <MenuItem
                        onClick={handleMenuClose}
                        component={NavLink}
                        activeClassName={classes.activeMenuItem}
                        to="/main-form"
                      >
                        FORM
                      </MenuItem>
                      <MenuItem
                        onClick={handleMenuClose}
                        component={NavLink}
                        activeClassName={classes.activeMenuItem}
                        to="/class-form"
                      >
                        CLASSFORM
                      </MenuItem>
                      <MenuItem
                        onClick={handleMenuClose}
                        component={NavLink}
                        activeClassName={classes.activeMenuItem}
                        to="/todo"
                      >
                        TODO
                      </MenuItem>
                      <MenuItem
                        onClick={handleMenuClose}
                        component={NavLink}
                        activeClassName={classes.activeMenuItem}
                        to="/cats"
                      >
                        CATS
                      </MenuItem>
                    </Menu>
                  </div>
                </Slide>
              )}
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
};

export default Navigation;
