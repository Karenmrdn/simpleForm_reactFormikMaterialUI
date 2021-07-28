import { createTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: {
      main: "#11cb5f",
    },
    error: { main: red[500] },
  },
});

export default theme;
