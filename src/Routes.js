import React from "react";
import MainForm from "./components/MainForm";
import Users from "./screens/Users/Users";
import { ProvideUsers } from "./hooks/useUsers";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./screens/NotFound/NotFound";
import ClassForm from "./screens/ClassForm/ClassForm";
import Todos from "./screens/Todo/Todos";
import Cats from "./screens/Cats/Cats";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/todo" />} />
      <Route
        path="/users"
        component={() => (
          <ProvideUsers>
            <Users />
          </ProvideUsers>
        )}
      />
      <Route path="/main-form" component={() => <MainForm />} />
      <Route path="/class-form" component={() => <ClassForm />} />
      <Route path="/todo" component={() => <Todos />} />
      <Route path="/cats" component={() => <Cats />} />
      <Route path="*" component={() => <NotFound />} />
    </Switch>
  );
};

export default Routes;
