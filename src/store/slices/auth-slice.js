import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
