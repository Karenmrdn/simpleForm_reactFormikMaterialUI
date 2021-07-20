import React from "react";
import TextField from "@material-ui/core/TextField";

const NameInput = ({ defaultValue, onChange }) => {
  const nameChangeHandler = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <TextField
        label="Name"
        type="text"
        id="nameInput"
        value={defaultValue}
        onChange={nameChangeHandler}
        margin='normal'
      />
      {/* <label htmlFor="nameInput">Name </label>
      <input
        type="text"
        id="nameInput"
        value={value}
        onChange={nameChangeHandler}
      /> */}
    </div>
  );
};

export default NameInput;
