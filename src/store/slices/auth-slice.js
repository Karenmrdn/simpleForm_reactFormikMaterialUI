import { createSlice } from "@reduxjs/toolkit";
import { calculateRemainingTime } from "../../utils/calculateRemainingTime";

// const checkTokenValidity = () => {
//   const storedToken = localStorage.getItem("token");
//   const storedExpirationTime = localStorage.getItem("expirationTime");

//   const remainingTime = calculateRemainingTime(storedExpirationTime);

//   if (remainingTime < 3600) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("expirationTime");
//     return null;
//   }

//   return {
//     token: storedToken,
//     duration: remainingTime,
//   };
// };

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn:
    localStorage.getItem("token") &&
    calculateRemainingTime(+localStorage.getItem("expirationTime")) > 0,
  isGettingAuthData: false,
  logoutTimerId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("expirationTime", action.payload.expirationTime);
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.token = null;

      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
    },
    setLogoutTimerId(state, action) {
      state.logoutTimerId = action.payload;
    },
    setIsGettingAuthData(state, action) {
      state.isGettingAuthData = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
