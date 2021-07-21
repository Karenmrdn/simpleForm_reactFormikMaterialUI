import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginTop: "16px",
    marginBottom: "8px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const JobSelector = ({ value, onChange }) => {
  const classes = useStyles();

  const jobChangeHandler = (e) => {
    onChange(e);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-required-label">Job</InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={value}
        name="job"
        onChange={jobChangeHandler}
        className={classes.selectEmpty}
      >
        <MenuItem value="Front End Dev">Front End Dev</MenuItem>
        <MenuItem value="Back End Dev">Back End Dev</MenuItem>
        <MenuItem value="Project Manager">Project Manager</MenuItem>
        <MenuItem value="Head Hunter">Head Hunter</MenuItem>
      </Select>
    </FormControl>
  );
};

export default JobSelector;
