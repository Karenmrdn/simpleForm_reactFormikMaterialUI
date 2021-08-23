import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@material-ui/core";
import Loader from "../../assets/svg/Loader";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { authorize } from "../../store/slices/auth-actions";
import { useSelector } from "react-redux";
import { errorActions } from "../../store/slices/error-slice";
import { authActions } from "../../store/slices/auth-slice";
import { calculateRemainingTime } from "../../utils/tokenActions";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: 20,
    borderRadius: 15,
  },
  content: {
    " *& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const AuthPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isGettingAuthData = useSelector(
    (state) => state.auth.isGettingAuthData
  );

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleAuthModeChange = () => {
    dispatch(errorActions.setError(""));
    setIsLogin((prevValue) => !prevValue);
  };

  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    await dispatch(authorize(enteredEmail, enteredPassword, isLogin));

    const token = localStorage.getItem("token");
    const remainingTime = calculateRemainingTime(token);

    const logoutTimerId = setTimeout(
      () => dispatch(authActions.logout()),
      remainingTime
    );

    dispatch(authActions.setLogoutTimerId(logoutTimerId));
  };

  return (
    <form onSubmit={handleLogin}>
      <Card className={classes.card} variant="outlined">
        <CardContent className={classes.content}>
          <Typography variant="h3" color="primary">
            {isLogin ? "Login form" : "Registration"}
          </Typography>
          <TextField
            value={enteredEmail}
            onChange={handleEmailChange}
            label="E-Mail"
            variant="outlined"
          />
          <TextField
            value={enteredPassword}
            onChange={handlePasswordChange}
            type="password"
            label="Password"
            variant="outlined"
          />
        </CardContent>
        {!isGettingAuthData && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mx={3}
            mb={2}
          >
            <Link
              type="button"
              component="button"
              variant="body1"
              onClick={handleAuthModeChange}
            >
              {isLogin ? "Create a new account" : "Back to login"}
            </Link>
            <Button type="submit" variant="contained" color="secondary">
              {isLogin ? "Login" : "Register"}
            </Button>
          </Box>
        )}
        {isGettingAuthData && (
          <div style={{ textAlign: "center" }}>
            <Loader />
          </div>
        )}
      </Card>
    </form>
  );
};

export default AuthPage;
