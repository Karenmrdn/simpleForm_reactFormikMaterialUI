import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
// import MainForm from "./components/MainForm";
import theme from "./config/theme";
import Users from "./components/Users";


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <MainForm /> */}
      <Users />
    </ThemeProvider>
  );
}

export default App;
