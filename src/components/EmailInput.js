import React from "react";
import TextField from "@material-ui/core/TextField";

const EmailInput = ({ defaultValue, onChange }) => {
  const emailChangeHandler = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <TextField
        label="Email"
        type="text"
        id="emailInput"
        value={defaultValue}
        onChange={emailChangeHandler}
        margin='normal'
      />
      {/* <label htmlFor="emailInput">Email </label>
      <input
        type="text"
        id="emailInput"
        value={value}
        onChange={emailChangeHandler}
      /> */}
    </div>
  );
};

export default EmailInput;
