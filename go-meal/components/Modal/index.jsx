"use client";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";

import styles from "./modal.module.css";

import { Close } from "@/components/icons";
import LoginForm from "@/components/login";
import SignupForm from "@/components/signup";
import ForgotPassword from "@/components/forgotPassword";

const formComponents = {
  login: LoginForm,
  signup: SignupForm,
  forgotPassword: ForgotPassword,
};

export default function Modal() {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);
  const isOpen = modalState.isOpen;

  const close = () => {
    dispatch(closeModal());
  };

  const FormComponent = modalState.formName
    ? formComponents[modalState.formName]
    : null;

  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <span className={styles.close} onClick={close}>
          <Close />
        </span>
        <div className={styles.wrapper}>
          {FormComponent && <FormComponent />}
        </div>
      </div>
    </div>
  );
}
