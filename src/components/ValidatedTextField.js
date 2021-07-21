import React from "react";
import { TextField, Typography } from "@material-ui/core";

const ValidatedTextField = (props) => {
  return (
    <div>
      <TextField
        label={props.label}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        margin="normal"
        error={Boolean(props.error) && props.isTouched}
      />
      {props.isTouched && props.error ? (
        <Typography color="error" display="block">
          {props.error}
        </Typography>
      ) : null}
    </div>
  );
};

export default ValidatedTextField;
