import React from "react";
import Switch from "@material-ui/core/Switch";
import Slide from "@material-ui/core/Slide";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const Test = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <div className={classes.wrapper}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <div>
            <Link
              component={NavLink}
              to="/users"
              color="inherit"
              className={classes.link}
              activeClassName={classes.active}
            >
              USERS
            </Link>
            <Link
              component={NavLink}
              to="/main-form"
              color="inherit"
              className={classes.link}
              activeClassName={classes.active}
            >
              FORM
            </Link>
            <Link
              component={NavLink}
              to="/class-form"
              color="inherit"
              className={classes.link}
              activeClassName={classes.active}
            >
              CLASSFORM
            </Link>
            <Link
              component={NavLink}
              to="/todo"
              color="inherit"
              className={classes.link}
              activeClassName={classes.active}
            >
              TODO
            </Link>
            <Link
              component={NavLink}
              to="/cats"
              color="inherit"
              className={classes.link}
              activeClassName={classes.active}
            >
              CATS
            </Link>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Test;
