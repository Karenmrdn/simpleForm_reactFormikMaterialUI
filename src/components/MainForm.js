import React from "react";
import JobSelector from "./JobSelector";
import SaveIcon from "@material-ui/icons/Save";
import { Typography, Button } from "@material-ui/core";
import { useFormik } from "formik";
import ValidatedTextField from "./ValidatedTextField";
import { makeStyles } from "@material-ui/core/styles";
import yupValidation from "../validation/yupValidation";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(6),
  },
}));

const MainForm = () => {
  const classes = useStyles();

  /* 1. We are passing initial values to our 'useFormik' hook,
  props must match the 'name' attributes of TextFields.
  2. We need to add new attributes: 'value=formik.values.[name]' 
  and 'onChange={formik.handleChange}'
  3. Set 'onSubmit' of the form equal to 'formik.handleSubmit'
  and specify 'onSubmit' prop in 'useFormik' 
  4. 'validate' prop holds function, which have access to 'values' */
  const formik = useFormik({
    initialValues: {
      name: "",
      job: "Front End Dev",
      email: "",
      password: "",
      experience: null,
      hiredCount: null,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yupValidation,
  });

  const renderSwitch = (param) => {
    switch (formik.values.job) {
      case "Front End Dev":
      case "Back End Dev":
        break;
      case "Project Manager":
        return (
          <ValidatedTextField
            label="Experience"
            type="number"
            name="experience"
            value={formik.values.experience}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.experience}
            isTouched={formik.touched.experience}
            inputProps={{ min: 0, max: 20, step: 0.5 }}
          />
        );
      case "Head Hunter":
        return (
          <ValidatedTextField
            label="Hired people count"
            type="number"
            name="hiredCount"
            value={formik.values.hiredCount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.hiredCount}
            isTouched={formik.touched.hiredCount}
            inputProps={{ min: 0, step: 1 }}
          />
        );
      default:
        return <Typography color="error">Something went wrong</Typography>;
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className={classes.wrapper}>
      <Typography variant="h3" color="primary">
        Simple form
      </Typography>

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

      {renderSwitch(formik.values.job)}

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
        color="secondary"
        type="submit"
      >
        Submit form
      </Button>
    </form>
  );
};

export default MainForm;
