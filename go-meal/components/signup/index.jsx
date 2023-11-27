"use client";

import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";
import { useFormik } from "formik";
import { SignupSchema } from "@/schemas";
import { useState } from "react";

import styles from "./signup.module.css";
import { SignUpUser } from "@/services/signupService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        app: "cca9457e-53fc-4a9f-9eef-63f184255e00",
      },
      validationSchema: SignupSchema,
      onSubmit: (values) => {
        console.log("BURADAYIZ", values);
        setIsSuccess(true);
        SignUpUser(values)
          .then((resp) => {
            if (resp.status === 204) {
              toast.success("User created succesfully 🚀 ");
              setTimeout(() => {
                dispatch(closeModal());
              }, 2000);
            }
          })
          .catch((err) => {
            setIsSuccess(false);
            console.log(err);
          });
      },
    });
  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>SIGNUP</h1>
        <input
          name={"firstName"}
          type="text"
          value={values.firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        {errors?.firstName && touched.firstName ? (
          <span className={styles.error}>{errors.firstName}</span>
        ) : null}

        <input
          name={"lastName"}
          type="text"
          value={values.lastName}
          placeholder="Last Name"
          onChange={handleChange}
          className={errors?.username}
        />
        {errors?.lastName && touched.lastName ? (
          <span className={styles.error}>{errors.lastName}</span>
        ) : null}
        <input
          name={"email"}
          type="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          className={errors?.password}
        />
        {errors?.email && touched.email ? (
          <span className={styles.error}>{errors.email}</span>
        ) : null}
        <input
          name={"password"}
          type="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          className={errors?.password}
        />
        {errors?.password && touched.password ? (
          <span className={styles.error}>{errors.password}</span>
        ) : null}
        <div className={styles.actions}>
          <button
            type={"submit"}
            className={styles.signup}
            disabled={isSuccess}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
