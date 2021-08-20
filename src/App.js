import { Container } from "@material-ui/core";
import React from "react";
import Navigation from "./components/Navigation";
import Routes from "./routes/Routes";
import { useSelector } from "react-redux";
import ModalWindow from "./components/ModalWindow";

function App() {
  const error = useSelector((state) => state.error.error);

  return (
    <>
      <Navigation />
      <Container maxWidth="md">
        <Routes />
      </Container>
      {error && <ModalWindow color="error" text={error} />}
    </>
  );
}

export default App;
