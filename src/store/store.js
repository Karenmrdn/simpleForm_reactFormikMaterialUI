import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-slice";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: { todo: todoReducer },
});

export default store;
