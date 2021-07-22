import ThemeProvider from "@material-ui/styles/ThemeProvider";
import React from "react";
import MainForm from "./components/MainForm";
import theme from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainForm />
    </ThemeProvider>
  );
}

export default App;
