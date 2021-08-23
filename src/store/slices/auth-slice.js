import { createSlice } from "@reduxjs/toolkit";
import { calculateRemainingTime } from "../../utils/tokenActions";

const token = localStorage.getItem("token");
const remainingTime = calculateRemainingTime(token);
console.log(remainingTime);

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: remainingTime > 0,
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
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.token = null;

      localStorage.removeItem("token");
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
