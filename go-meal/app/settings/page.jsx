"use client";
import { useSession } from "next-auth/react";

import styles from "./settings.module.css";
import Adress from "@/components/Adress";

export default function Settings() {
  const session = useSession();

  if (session.status === "unauthenticated") {
    return null;
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <h1>Settings</h1>
        <div className={styles.container}>
          <div className={styles.form}>
            <span className={styles.title}>My Account</span>
            <input type="text" placeholder={"First Name"} />
            <input type="text" placeholder={"Last Name"} />
            <input type="text" placeholder={"E-mail"} />
            <button className={styles.savaBtn}>Save</button>
          </div>
          <div className={styles.form}>
            <span className={styles.title}>Password</span>
            <input type="text" placeholder={"Current password"} />
            <input type="text" placeholder={"New password"} />
            <input type="text" placeholder={"New password (confirm)"} />
            <button className={styles.savaBtn}>Save</button>
          </div>
        </div>
      </div>
      <Adress />
      <div className={styles.wrapper}>
        <h1>My Cards</h1>
        <div className={styles.container}>
          <div className={styles.form}>
            <span className={styles.title}>My Account</span>
            <input type="text" placeholder={"First Name"} />
            <input type="text" placeholder={"Last Name"} />
            <input type="text" placeholder={"E-mail"} />
            <button className={styles.savaBtn}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
