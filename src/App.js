import React from "react";
import MainForm from "./components/MainForm";
import Users from "./screens/Users/Users";
import { ProvideUsers } from "./hooks/useUsers";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./screens/NotFound/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/users" />
        </Route>
        <Route path="/main-form">
          <MainForm />
        </Route>
        <Route path="/users">
          <ProvideUsers>
            <Users />
          </ProvideUsers>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
