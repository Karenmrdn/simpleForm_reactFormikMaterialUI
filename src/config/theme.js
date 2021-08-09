import { createTheme } from "@material-ui/core";
import { lightBlue, blueGrey, red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: { main: lightBlue[800] },
    secondary: {
      main: blueGrey[800],
    },
    error: { main: red[500] },
  },
});

export default theme;
