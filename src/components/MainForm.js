import React from "react";
import JobSelector from "./JobSelector";
import styles from "./MainForm.module.css";
import SaveIcon from "@material-ui/icons/Save";
import { Typography, Button } from "@material-ui/core";
import { useFormik } from "formik";
import ValidatedTextField from "./ValidatedTextField";

const validate = (values) => {
  const errors = {};
  const emailValidation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    );
  const passwordValidation = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(
    values.password
  );

  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (values.name.length < 5) {
    errors.name = "Name must be at least 5 letters long";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailValidation) {
    errors.email = "Invalid email format";
  }

  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (!passwordValidation) {
    errors.password =
      "Password must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters";
  }

  return errors;
};

const MainForm = () => {
  /* 1. We are passing initial values to our 'useFormik' hook,
  props must match the 'name' attributes of TextFields.
  2. We need to add new attributes: 'value=formik.values.[name]' 
  and 'onChange={formik.handleChange}'
  3. Set 'onSubmit' of the form equal to 'formik.handleSubmit'
  and specify 'onSubmit' prop in 'useFormik' */
  const formik = useFormik({
    initialValues: {
      name: "",
      job: "Front End Dev",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.wrapper}>
      <Typography variant="h3">Simple form</Typography>

      <ValidatedTextField
        label="Name"
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.name}
        isTouched={formik.touched.name}
      />

      <JobSelector value={formik.values.job} onChange={formik.handleChange} />

      <ValidatedTextField
        label="Email"
        type="text"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email}
        isTouched={formik.touched.email}
      />

      <ValidatedTextField
        label="Password"
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password}
        isTouched={formik.touched.password}
      />

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
