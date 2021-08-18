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
import axios from "axios";
import Loader from "../../assets/svg/Loader";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/auth-slice";
import { useHistory } from "react-router";
import { authorize } from "../../store/slices/auth-actions";

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
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthModeChange = () => {
    setError(null);
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

    setIsLoading(true);

    await dispatch(authorize(enteredEmail, enteredPassword, isLogin));
    history.replace("/");

    setIsLoading(false);

    /* let url = "";
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASroRhL4HAS8iImrESE7vQwXtUJDDHnxk";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASroRhL4HAS8iImrESE7vQwXtUJDDHnxk";
    }

    try {
      const response = await axios.post(url, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      });
      console.log(response.data);

      dispatch(
        authActions.login({
          token: response.data.idToken,
          expiresIn: response.data.expiresIn,
        })
      );
      history.replace("/");

      setError("");
    } catch (err) {
      setError(err.response.data.error.message);
    } */
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
          {error && <Typography color="error">{error}</Typography>}
        </CardContent>
        {!isLoading && (
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
        {isLoading && (
          <div style={{ textAlign: "center" }}>
            <Loader />
          </div>
        )}
      </Card>
    </form>
  );
};

export default AuthPage;
