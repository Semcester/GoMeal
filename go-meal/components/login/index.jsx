"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { closeModal, openModal } from "@/redux/slices/modalSlice";
import { userLogin } from "@/redux/slices/userSlice";

import { loginSchema } from "@/schemas";
import { authService } from "@/services";

import styles from "./login.module.css";

export default function Login() {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      setErrorLogin(false);
      const response = authService.Login(values);
      response.then((res) => {
        if (res.ok) {
          setIsLoading(false);
          dispatch(closeModal());
        } else {
          setErrorLogin(true);
          setIsLoading(false);
        }
      });
    },
  });

  const handleForgot = () => {
    dispatch(openModal({ formName: "forgotPassword" }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>LOGIN</h1>
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
        <a onClick={handleForgot}>Forgot Password ?</a>
        <button type={"submit"} className={styles.login} disabled={isLoading}>
          Login
        </button>
        {errorLogin && (
          <span className={styles.error}>Username or password is wrong!</span>
        )}
      </div>
    </form>
  );
}
