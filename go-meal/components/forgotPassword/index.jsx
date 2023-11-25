"use client";
import { useState } from "react";
import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { closeModal, openModal } from "@/redux/slices/modalSlice";

import { authService } from "@/services";

import styles from "./forgotPassword.module.css";
import "react-toastify/dist/ReactToastify.css";
import { forgotPasswordSchema } from "@/schemas/forgotPasswordSchema";
import { ToastContainer, toast } from "react-toastify";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorForgot, setErrorForgot] = useState(false);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      console.log(values, "FORGOT");
      setIsLoading(true);
      setErrorForgot(false);
      const response = authService.ForgotPassword(values);
      response
        .then((res) => {
          if (res.ok) {
            setIsLoading(false);
            dispatch(closeModal());
          }
        })
        .catch((err) => {
          setErrorForgot(true);
          setIsLoading(false);
          toast.error("User Not Exist");
        });
    },
  });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>Forgot Password</h1>
      <input
        name={"email"}
        type="text"
        value={values.email}
        placeholder="User name or Email"
        onChange={handleChange}
        className={errors?.email}
      />
      {errors?.email && touched.email ? (
        <span className={styles.error}>{errors.email}</span>
      ) : null}
      <div className={styles.actions}>
        <button type={"submit"} className={styles.login} disabled={isLoading}>
          Send Password
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}
