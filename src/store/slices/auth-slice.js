import { createSlice } from "@reduxjs/toolkit";
import { calculateRemainingTime } from "../../utils/tokenActions";
import firebase from "firebase/app";

const token = localStorage.getItem("token");
const remainingTime = calculateRemainingTime(token);
console.log(remainingTime);

const firebaseConfig = {
  apiKey: "AIzaSyASroRhL4HAS8iImrESE7vQwXtUJDDHnxk",
  authDomain: "testproject-room4.firebaseapp.com",
  projectId: "testproject-room4",
  storageBucket: "testproject-room4.appspot.com",
  messagingSenderId: "788516196793",
  appId: "1:788516196793:web:ee4d6b9d79020d9f95a668",
};

firebase.initializeApp(firebaseConfig);

const initialState = {
  token,
  isLoggedIn: remainingTime > 0,
  isGettingAuthData: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;

      localStorage.setItem("token", action.payload);
    },
    signOut(state, action) {
      firebase.auth().signOut();

      state.isLoggedIn = false;
      state.token = null;

      localStorage.removeItem("token");
    },
    setIsGettingAuthData(state, action) {
      state.isGettingAuthData = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
