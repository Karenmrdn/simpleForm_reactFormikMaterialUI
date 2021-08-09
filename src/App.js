import { Container } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Routes />
      </Container>
    </>
  );
}

export default App;
