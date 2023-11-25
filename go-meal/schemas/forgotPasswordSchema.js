import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().required("Email Name cannot be empty!"),
});

forgotPasswordSchema.validateSingleField = (fieldName, value) => {
  const fieldSchema = Yup.object().shape({
    [fieldName]: forgotPasswordSchema.fields[fieldName],
  });
  if (!fieldSchema.isValidSync()) {
    return fieldSchema.validateSync({ [fieldName]: value });
  }
};
