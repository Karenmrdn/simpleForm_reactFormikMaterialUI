import axios from "axios";
import { authActions } from "./auth-slice";

export const authorize = (email, password, isLogin) => async (dispatch) => {
  let error = "";

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
    console.log(response.data);

    dispatch(
      authActions.login({
        token: response.data.idToken,
        expiresIn: response.data.expiresIn,
      })
    );
    // history.replace("/");

    error = "";
  } catch (err) {
    error = err.response.data.error.message;
  }

  return error;
};
