import React, { useState } from "react";
import JobSelector from "./JobSelector";
import styles from "./MainForm.module.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const MainForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [jobValue, setJobValue] = useState("Front End Dev");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const nameChangeHandler = (e) => {
    setNameValue(e.target.value);
  };

  const onJobChange = (newValue) => {
    setJobValue(newValue);
  };

  const emailChangeHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const resultData = {
      nameValue,
      jobValue,
      emailValue,
      passwordValue,
    };

    console.log(resultData);
  };

  return (
    <form onSubmit={submitHandler} className={styles.wrapper}>
      <Typography variant="h3">Simple form</Typography>

      <div>
        <TextField
          label="Name"
          type="text"
          id="nameInput"
          value={nameValue}
          onChange={nameChangeHandler}
          margin="normal"
        />
      </div>

      <JobSelector defaultValue={jobValue} onChange={onJobChange} />

      <div>
        <TextField
          label="Email"
          type="text"
          id="emailInput"
          value={emailValue}
          onChange={emailChangeHandler}
          margin="normal"
        />
      </div>

      <div>
        <TextField
          label="Password"
          type="password"
          id="passwordInput"
          value={passwordValue}
          onChange={passwordChangeHandler}
          margin="normal"
        />
      </div>

      <Button
        startIcon={<SaveIcon />}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit form
      </Button>
    </form>
  );
};

export default MainForm;
