import * as Yup from "yup";

const mainFormValidationScheme = Yup.object().shape({
  name: Yup.string()
    .trim("Spaces is not allowed")
    .min(5, "Name must be at least 5 letters long")
    .max(20, "Name must be no more than 20 letters long")
    .required("Name is required"),
  job: Yup.string(),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 letters long")
    .max(20, "Password must be no more than 20 letters long")
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      "Password must contain at least one number, one uppercase and lowercase letter"
    )
    .required("Password is required"),
  experience: Yup.number().when("job", (job, schema) => {
    if (job === "Project Manager") {
      return schema.required("Experience is required");
    }
  }),
  hiredCount: Yup.number().when("job", (job, schema) => {
    if (job === "Head Hunter") {
      return schema.required("Hired people count is required");
    }
  }),
});

export default mainFormValidationScheme;
