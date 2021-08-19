import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import MainForm from "../screens/MainForm/MainForm";
import Users from "../screens/Users/Users";
import { ProvideUsers } from "../hooks/useUsers";
import ClassForm from "../screens/ClassForm/ClassForm";
import Todos from "../screens/Todo/Todos";
import Cats from "../screens/Cats/Cats";
import NotFound from "../screens/NotFound/NotFound";

const AuthRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect to="/auth" />;
  }

  return (
    <Switch>
      <Route
        path="/users"
        component={() => (
          <ProvideUsers>
            <Users />
          </ProvideUsers>
        )}
      />
      <Route path="/main-form" component={MainForm} />
      <Route path="/class-form" component={ClassForm} />
      <Route path="/todo" component={Todos} />
      <Route path="/cats" component={Cats} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default AuthRoutes;
