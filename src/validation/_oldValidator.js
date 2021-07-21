/* We could use it in 'formik' object in 'validate' prop
but it is just inconvenient, so we use Yup for this */

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
