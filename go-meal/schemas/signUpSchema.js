import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name cannot be empty!"),
  lastName: Yup.string().required("Last Name cannot be empty!"),
  email: Yup.string().required("Email cannot be empty!"),
  password: Yup.string().required("Password cannot be empty!"),
});
