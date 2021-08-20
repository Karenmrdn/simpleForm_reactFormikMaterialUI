import axios from "axios";
import { authActions } from "./auth-slice";
import { errorActions } from "./error-slice";

let errorMessage = "";

export const authorize = (email, password, isLogin) => async (dispatch) => {
  dispatch(authActions.setIsGettingAuthData(true));

  let url = "";
  if (isLogin) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASroRhL4HAS8iImrESE7vQwXtUJDDHnxk";
  } else {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASroRhL4HAS8iImrESE7vQwXtUJDDHnxk";
  }

  try {
    const response = await axios.post(url, {
      email,
      password,
      returnSecureToken: true,
    });

    const expirationTimeInMilliseconds =
      Date.now() + +response.data.expiresIn * 1000;

    dispatch(
      authActions.login({
        token: response.data.idToken,
        expirationTime: expirationTimeInMilliseconds,
      })
    );

    // Nulling error on successful login
    errorMessage = "";
    dispatch(errorActions.setError(errorMessage));
  } catch (err) {
    if (err.response) {
      errorMessage = err.response.data.error.message;
      dispatch(errorActions.setError(errorMessage));
    } else if (err.request) {
      console.log(`Request error - ${err.request}`);
    } else {
      console.log(err.message);
    }
    console.log(err.config);
  }

  dispatch(authActions.setIsGettingAuthData(false));
};
