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
    console.log(response.data);

    dispatch(
      authActions.login({
        token: response.data.idToken,
        expiresIn: response.data.expiresIn,
      })
    );

    errorMessage = "";
    dispatch(errorActions.setError(errorMessage));
  } catch (err) {
    errorMessage = err.response.data.error.message;
    dispatch(errorActions.setError(errorMessage));
  }

  dispatch(authActions.setIsGettingAuthData(false));
};
