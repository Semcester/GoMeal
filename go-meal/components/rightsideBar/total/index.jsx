"use client";
import { useState } from "react";

import styles from "./total.module.css";
import { Coupon, RightArrow } from "@/components/icons";

export default function Total({ btnLabel }) {
  const [couponSet, setCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.bill}>
        <div className={styles.service}>
          <span>Service</span>
          <span className={styles.price}>
            +<span className={styles.currency}>$</span>1.00
          </span>
        </div>
        <div className={styles.total}>
          <span className={styles.totalText}>Total</span>
          <span className={styles.price}>
            <span className={styles.currency}>$</span>202.00
          </span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.coupon} onClick={() => setCoupon(true)}>
          <Coupon /> Have a coupon code? <RightArrow />
        </button>
        {couponSet && (
          <div className={styles.couponCode}>
            <input
              type={"text"}
              placeholder={"Code..."}
              className={styles.couponInput}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button className={styles.discount}>Apply 😍</button>
          </div>
        )}
        <button className={styles.checkout}>{btnLabel}</button>
      </div>
    </div>
  );
}
