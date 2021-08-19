import { Container } from "@material-ui/core";
import React from "react";
import Navigation from "./components/Navigation";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <Navigation />
      <Container maxWidth="md">
        <Routes />
      </Container>
    </>
  );
}

export default App;
