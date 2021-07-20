import React from "react";
// import JobSelector from "./JobSelector";
import styles from "./MainForm.module.css";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";

const MainForm = () => {
  /* 1. We are passing initial values to our 'useFormik' hook,
  props must match the 'name' attributes of TextFields.
  2. We need to add new attributes: 'value=formik.values.[name]' 
  and 'onChange={formik.handleChange}'
  3. Set 'onSubmit' of the form equal to 'formik.handleSubmit'
  and specify 'onSubmit' prop in 'useFormik' */
  const formik = useFormik({
    initialValues: {
      name: "Andrew",
      job: "Front End Dev",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.name.trim()) {
        errors.name = "Required";
      }

      if (!values.email.trim()) {
        errors.email = "Required";
      }

      if (!values.password.trim()) {
        errors.password = "Required";
      }

      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.wrapper}>
      <Typography variant="h3">Simple form</Typography>

      <div>
        <TextField
          label="Name"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          margin="normal"
        />
      </div>

      {/* <JobSelector value={jobValue} onChange={onJobChange} /> */}

      <div>
        <TextField
          label="Email"
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          margin="normal"
        />
      </div>

      <div>
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
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
