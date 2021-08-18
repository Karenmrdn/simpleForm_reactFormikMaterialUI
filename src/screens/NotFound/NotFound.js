import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import notFoundGif from "../../assets/gif/notFound.gif";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
}));

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography variant="h3" color="primary">
        404 - NOT FOUND
      </Typography>
      <img src={notFoundGif} alt="Cat looking for a page" width="500" />
    </div>
  );
}
