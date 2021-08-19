import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "../screens/Auth/AuthPage";
import HomePage from "../components/HomePage";
import AuthRoutes from "./AuthRoutes";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <AuthRoutes />
    </Switch>
  );
};

export default Routes;
