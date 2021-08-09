import { createSlice } from "@reduxjs/toolkit";

const catsSlice = createSlice({
  name: "cats",
  initialState: { photoUrl: "" },
  reducers: {
    setPhotoUrl(state, action) {
      state.photoUrl = action.payload;
    },
  },
});

export const catsActions = catsSlice.actions;

export default catsSlice.reducer;
