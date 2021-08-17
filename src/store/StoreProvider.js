import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import catsReducer from "./slices/cats-slice";
import authReducer from "./slices/auth-slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedTodoReducer = persistReducer(persistConfig, todoReducer);

const store = configureStore({
  reducer: { todo: persistedTodoReducer, cats: catsReducer, auth: authReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

const StoreProvider = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
