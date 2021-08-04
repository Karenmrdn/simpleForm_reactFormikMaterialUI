import React, { Component } from "react";
import { Typography, Button, TextField, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import SaveIcon from "@material-ui/icons/Save";

const styles = (theme) => ({
  wrapper: {
    margin: theme.spacing(6),
  },
});

const isEmpty = (value) => value.trim().length === 0;

class ClassForm extends Component {
  constructor() {
    super();
    this.state = {
      enteredFirstName: "",
      enteredLastName: "",
      firstNameIsTouched: false,
      lastNameIsTouched: false,
      timer: 0,
      intervalId: null,
    };
  }

  componentDidMount = () => {
    const interval = setInterval(() => {
      this.setState((curState) => {
        return {
          timer: curState.timer + 1,
        };
      });
    }, 1000);
    this.setState({ intervalId: interval });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };

  firstNameChangeHandler = (e) => {
    this.setState({ enteredFirstName: e.target.value });
  };

  lastNameChangeHandler = (e) => {
    this.setState({ enteredLastName: e.target.value });
  };

  firstNameBlurHandler = () => {
    this.setState({ firstNameIsTouched: true });
  };

  lastNameBlurHandler = () => {
    this.setState({ lastNameIsTouched: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const formIsValid =
      !isEmpty(this.state.enteredFirstName) &&
      !isEmpty(this.state.enteredLastName);

    if (!formIsValid) {
      this.setState({
        firstNameIsTouched: true,
        lastNameIsTouched: true,
      });
      return;
    }

    console.log({
      firstName: this.state.enteredFirstName,
      lastName: this.state.enteredLastName,
    });

    this.setState({
      enteredFirstName: "",
      enteredLastName: "",
      firstNameIsTouched: false,
      lastNameIsTouched: false,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={classes.wrapper}>
        <Grid container direction="column" style={{ maxWidth: "60vh" }}>
          <Typography variant="h3" color="primary">
            Class form
          </Typography>

          <Typography color="textSecondary">
            Time spent in this form - {this.state.timer} second(s)
          </Typography>

          <TextField
            label="First name"
            type="text"
            name="firstName"
            margin="normal"
            value={this.state.enteredFirstName}
            onChange={this.firstNameChangeHandler}
            onBlur={this.firstNameBlurHandler}
            error={
              this.state.firstNameIsTouched &&
              isEmpty(this.state.enteredFirstName)
            }
            helperText={
              this.state.firstNameIsTouched &&
              isEmpty(this.state.enteredFirstName) &&
              "First name must not be empty"
            }
          />

          <TextField
            label="Last name"
            type="text"
            name="lastName"
            margin="normal"
            value={this.state.enteredLastName}
            onChange={this.lastNameChangeHandler}
            onBlur={this.lastNameBlurHandler}
            error={
              this.state.lastNameIsTouched &&
              isEmpty(this.state.enteredLastName)
            }
            helperText={
              this.state.lastNameIsTouched &&
              isEmpty(this.state.enteredLastName) &&
              "Last name must not be empty"
            }
          />

          <Button
            startIcon={<SaveIcon />}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Submit form
          </Button>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles)(ClassForm);
