import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isLoggedIn: !!localStorage.getItem("token"),
    expiresIn: null,
    isGettingAuthData: false,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.expiresIn = action.payload.expiresIn;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("expiresIn", action.payload.expiresIn);
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.token = null;
      state.expiresIn = null;

      localStorage.removeItem("token");
      localStorage.removeItem("expiresIn");
    },
    setIsGettingAuthData(state, action) {
      state.isGettingAuthData = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
