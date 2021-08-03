import React from "react";
import JobSelector from "../screens/MainForm/JobSelector";
import SaveIcon from "@material-ui/icons/Save";
import { Typography, Button, TextField, Grid } from "@material-ui/core";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import mainFormValidationScheme from "../validation/mainFormValidationScheme";

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
      experience: "",
      hiredCount: "",
    },
    onSubmit: (values) => {
      const result = {
        name: values.name,
        job: values.job,
        email: values.email,
        password: values.password,
      };

      switch (values.job) {
        case "Front End Dev":
        case "Back End Dev":
          break;
        case "Project Manager":
          result.experience = values.experience;
          break;
        case "Head Hunter":
          result.hiredCount = values.hiredCount;
          break;
        default:
          console.log("Something went wrong");
          console.log();
      }

      console.log(result);
    },
    validationSchema: mainFormValidationScheme,
  });

  const renderSwitch = (param) => {
    switch (param) {
      case "Front End Dev":
      case "Back End Dev":
        break;
      case "Project Manager":
        return (
          <TextField
            label="Experience"
            type="number"
            name="experience"
            margin="normal"
            value={formik.values.experience}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.experience) && formik.touched.experience
            }
            helperText={
              Boolean(formik.errors.experience) && formik.touched.experience
                ? formik.errors.experience
                : null
            }
            inputProps={{ min: 0, max: 20, step: 0.5 }}
          />
        );
      case "Head Hunter":
        return (
          <TextField
            label="Hired people count"
            type="number"
            name="hiredCount"
            margin="normal"
            value={formik.values.hiredCount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.hiredCount) && formik.touched.hiredCount
            }
            helperText={
              Boolean(formik.errors.hiredCount) && formik.touched.hiredCount
                ? formik.errors.hiredCount
                : null
            }
            inputProps={{ min: 0, step: 1 }}
          />
        );
      default:
        return <Typography color="error">Something went wrong</Typography>;
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className={classes.wrapper}>
      <Grid container direction="column" style={{ maxWidth: "60vh" }}>
        <Typography variant="h3" color="primary">
          Simple form
        </Typography>

        <TextField
          label="Name"
          type="text"
          name="name"
          margin="normal"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.name) && formik.touched.name}
          helperText={
            Boolean(formik.errors.name) && formik.touched.name
              ? formik.errors.name
              : null
          }
        />

        <JobSelector value={formik.values.job} onChange={formik.handleChange} />

        {renderSwitch(formik.values.job)}

        <TextField
          label="Email"
          type="text"
          name="email"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.email) && formik.touched.email}
          helperText={
            Boolean(formik.errors.email) && formik.touched.email
              ? formik.errors.email
              : null
          }
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.password) && formik.touched.password}
          helperText={
            Boolean(formik.errors.password) && formik.touched.password
              ? formik.errors.password
              : null
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
};

export default MainForm;
