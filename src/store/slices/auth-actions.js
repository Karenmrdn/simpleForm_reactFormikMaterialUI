import { authActions } from "./auth-slice";
import { errorActions } from "./error-slice";
import firebase from "firebase/app";
import "firebase/auth";

export const authorize = (email, password, isLogin) => async (dispatch) => {
  dispatch(authActions.setIsGettingAuthData(true));

  try {
    const userCredential = isLogin
      ? await firebase.auth().signInWithEmailAndPassword(email, password)
      : await firebase.auth().createUserWithEmailAndPassword(email, password);

    const token = userCredential.user.Aa;
    dispatch(authActions.signIn(token));
  } catch (error) {
    dispatch(errorActions.setError(error.message));
  }

  dispatch(authActions.setIsGettingAuthData(false));
};

export const loginWithGoogle = () => async (dispatch) => {
  dispatch(authActions.setIsGettingAuthData(true));

  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);

    const token = user.Aa;
    dispatch(authActions.signIn(token));
  } catch (error) {
    dispatch(errorActions.setError(error.message));
  }

  dispatch(authActions.setIsGettingAuthData(false));
};

export const loginWithFacebook = () => async (dispatch) => {
  dispatch(authActions.setIsGettingAuthData(true));

  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);

    console.log(user);
    const token = user.Aa;
    // dispatch(authActions.signIn(token));
  } catch (error) {
    dispatch(errorActions.setError(error.message));
  }

  dispatch(authActions.setIsGettingAuthData(false));
};
