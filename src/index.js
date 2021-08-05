import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./config/theme";
import { Container } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container maxWidth="md">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
