import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email Name cannot be empty!"),
  password: Yup.string().required("Password cannot be empty!"),
});

loginSchema.validateSingleField = (fieldName, value) => {
  const fieldSchema = Yup.object().shape({
    [fieldName]: loginSchema.fields[fieldName],
  });
  if (!fieldSchema.isValidSync()) {
    return fieldSchema.validateSync({ [fieldName]: value });
  }
};
