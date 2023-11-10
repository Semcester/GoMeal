"use client";

import styles from "./balance.module.css";

export default function Balance() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Your Balance</h1>
      <div className={styles.container}>
        <div className={styles.info}>
          <span>Balance</span>
          <h1 className={styles.price}>$12.000</h1>
        </div>
      </div>
    </div>
  );
}
