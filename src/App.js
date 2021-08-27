import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import Navigation from "./components/Navigation";
import Routes from "./routes/Routes";
import { useSelector } from "react-redux";
import ModalWindow from "./components/ModalWindow";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "./store/slices/auth-slice";
import { calculateRemainingTime } from "./utils/tokenActions";

function App() {
  const error = useSelector((state) => state.error.error);
  const dispatch = useDispatch();
  const currentUrl = useLocation().pathname;
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      const remainingTime = calculateRemainingTime(token);
      if (remainingTime <= 0) {
        dispatch(authActions.signOut());
      }
    }
  }, [currentUrl, token, dispatch]);

  return (
    <>
      <Navigation />
      <Container maxWidth="md">
        <Routes />
        {error && <ModalWindow color="error" text={error} />}
      </Container>
    </>
  );
}

export default App;
