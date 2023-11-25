"use client";
import { useState } from "react";

import styles from "./total.module.css";
import { Coupon, RightArrow } from "@/components/icons";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas";
import { closeModal } from "@/redux/slices/modalSlice";
import { addCoupon, addOrder } from "@/redux/slices/totalSlice";

export default function Total({ btnLabel }) {
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();

  const [couponSet, setCoupon] = useState(false);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      couponCode: "",
    },
    onSubmit: (values) => {
      dispatch(addCoupon(values));
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.bill}>
        <div className={styles.service}>
          <span>Service</span>
          <span className={styles.price}>
            +<span className={styles.currency}>$</span>
            {total.serviceFee}
          </span>
        </div>
        <div className={styles.total}>
          <span className={styles.totalText}>Total</span>
          <span className={styles.price}>
            <span className={styles.currency}>$</span>
            {total.total}
          </span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.coupon} onClick={() => setCoupon(true)}>
          <Coupon /> Have a coupon code? <RightArrow />
        </button>
        {couponSet && (
          <div>
            <form className={styles.couponCode} onSubmit={handleSubmit}>
              <input
                name={"couponCode"}
                value={values.couponCode}
                type={"text"}
                placeholder={"Code..."}
                className={styles.couponInput}
                onChange={handleChange}
              />
              <button className={styles.discount} type={"submit"}>
                Apply 😍
              </button>
            </form>
          </div>
        )}
        <button className={styles.checkout}>{btnLabel}</button>
      </div>
    </div>
  );
}
