import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    /* marginTop: theme.spacing(2), */
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
    onChange(e.target.value);
  };

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Job</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={value}
          onChange={jobChangeHandler}
          className={classes.selectEmpty}
        >
          <MenuItem value="Front End Dev">Front End Dev</MenuItem>
          <MenuItem value="Back End Dev">Back End Dev</MenuItem>
          <MenuItem value="Project Manager">Project Manager</MenuItem>
          <MenuItem value="Head Hunter">Head Hunter</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      {/* Job &nbsp;
      <select onChange={jobChangeHandler} name="jobs" id="job-selector">
        <option value={value}>{value}</option>
        <option value="Back End Dev">Back End Dev</option>
        <option value="Project Manager">Project Manager</option>
        <option value="Head Hunter">Head Hunter</option>
      </select> */}
    </div>
  );
};

export default JobSelector;
