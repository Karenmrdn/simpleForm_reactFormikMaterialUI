import React from "react";
import MainForm from "./components/MainForm";
import Users from "./screens/Users/Users";
import { ProvideUsers } from "./hooks/useUsers";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./screens/NotFound/NotFound";
import Header from "./components/Header";
import ClassForm from "./screens/ClassForm/ClassForm";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/class-form" />
        </Route>
        <Route path="/main-form">
          <MainForm />
        </Route>
        <Route path="/users">
          <ProvideUsers>
            <Users />
          </ProvideUsers>
        </Route>
        <Route path="/class-form">
          <ClassForm />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
