import ThemeProvider from "@material-ui/styles/ThemeProvider";
import React from "react";
import MainForm from "./components/MainForm";
import { createTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: purple[500] },
      secondary: {
        main: "#11cb5f",
      },
      error: { main: blue[500] },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MainForm />
    </ThemeProvider>
  );
}

export default App;
