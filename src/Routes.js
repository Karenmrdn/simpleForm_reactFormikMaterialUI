import React from "react";
import MainForm from "./screens/MainForm/MainForm";
import Users from "./screens/Users/Users";
import { ProvideUsers } from "./hooks/useUsers";
import { Route, Switch } from "react-router-dom";
import ClassForm from "./screens/ClassForm/ClassForm";
import Todos from "./screens/Todo/Todos";
import Cats from "./screens/Cats/Cats";
import NotFound from "./screens/NotFound/NotFound";
import AuthPage from "./screens/Auth/AuthPage";
import HomePage from "./components/HomePage";
import { useSelector } from "react-redux";

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Switch>
      <Route path="/" exact>
        {isLoggedIn ? <HomePage /> : <AuthPage />}
      </Route>
      {!isLoggedIn && <Route path="/auth" component={AuthPage} />}
      <Route
        path="/users"
        component={() => (
          <ProvideUsers>
            <Users />
          </ProvideUsers>
        )}
      />
      {isLoggedIn && (
        <>
          <Route path="/main-form" component={MainForm} />
          <Route path="/class-form" component={ClassForm} />
          <Route path="/todo" component={Todos} />
          <Route path="/cats" component={Cats} />
        </>
      )}
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
