"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

import { useFormik } from "formik";

import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";
import { userLogin } from "@/redux/slices/userSlice";

import { loginSchema } from "@/schemas";
import { authService } from "@/services";

import styles from "./login.module.css";

export default function Login() {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      authService.Login(values);

      if (session) {
        dispatch(closeModal());
        dispatch(userLogin(session));
        setIsLoading(false);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>LOGIN</h1>
      <input
        name={"email"}
        type="text"
        value={values.email}
        placeholder="Kullanıcı adı"
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
        placeholder="Şifrenizi girin"
        onChange={handleChange}
        className={errors?.password}
      />
      {errors?.password && touched.password ? (
        <span className={styles.error}>{errors.password}</span>
      ) : null}
      <div className={styles.actions}>
        <a>Forgot Password ?</a>
        <button type={"submit"} className={styles.login} disabled={isLoading}>
          Login
        </button>
      </div>
    </form>
  );
}
