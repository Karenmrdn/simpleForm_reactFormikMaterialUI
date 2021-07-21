import * as Yup from "yup";

const yupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Name must be at least 5 letters long")
    .max(20, "Name must be no more than 20 letters long")
    .required("Name is required"),
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
});

export default yupSchema;
