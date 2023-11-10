import styles from "./settings.module.css";

export default function Settings() {
  return (
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
  );
}
