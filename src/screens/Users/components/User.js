import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 400,
    margin: 20,
    borderRadius: 15,
  },
  btn: {
    margin: theme.spacing(1),
    marginTop: 0,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const User = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {user.name}
        </Typography>
        <Typography variant="h5" component="h2" color="primary">
          {user.username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {user.email}
        </Typography>
        <Typography variant="body2" component="p">
          {user.address.city}
          <br />
          {`${user.address.street}, ${user.address.suite}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          className={classes.btn}
          size="small"
          color="secondary"
          onClick={() => alert("пiймався на гендзюцу")}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default User;
