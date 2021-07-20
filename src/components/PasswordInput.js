import React from "react";
import TextField from "@material-ui/core/TextField";

const PasswordInput = ({ defaultValue, onChange }) => {
  const passwordChangeHandler = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <TextField
        label="Password"
        type="password"
        id="passwordInput"
        value={defaultValue}
        onChange={passwordChangeHandler}
        margin='normal'
      />
      {/* <label htmlFor="passwordInput">Password </label>
      <input
        type="password"
        id="passwordInput"
        value={value}
        onChange={passwordChangeHandler}
      /> */}
    </div>
  );
};

export default PasswordInput;
