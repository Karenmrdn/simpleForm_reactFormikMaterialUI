import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isLoggedIn: false,
    expiresIn: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.expiresIn = action.payload.expiresIn;

      localStorage.setItem("token", state.token);
      localStorage.setItem("expiresIn", state.expiresIn);
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.token = null;
      state.expiresIn = null;

      localStorage.removeItem("token");
      localStorage.removeItem("expiresIn");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
