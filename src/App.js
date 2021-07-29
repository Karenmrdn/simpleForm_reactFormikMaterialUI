import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
// import MainForm from "./components/MainForm";
import theme from "./config/theme";
import UsersContainer from "./components/UsersContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <MainForm /> */}
      <UsersContainer />
    </ThemeProvider>
  );
}

export default App;
