import React from "react";
import { TextField } from "@material-ui/core";

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
        helperText={props.isTouched && props.error ? props.error : null}
        inputProps={props.inputProps}
      />
    </div>
  );
};

export default ValidatedTextField;
