import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
// import MainForm from "./components/MainForm";
import theme from "./config/theme";
import Users from "./screens/users/Users";
import { ProvideUsers } from "./hooks/use-users";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <MainForm /> */}
      <ProvideUsers>
        <Users />
      </ProvideUsers>
    </ThemeProvider>
  );
}

export default App;
