"use client";

import styles from "./editAdress/editAdress.module.css";
import { useSelector } from "react-redux";

export default function Adress() {
  const adresses = useSelector((state) => state.user.adresses);

  return (
    <div className={styles.wrapper}>
      <h1>Adress</h1>
      <div className={styles.container}>
        {adresses.map((adress) => {
          return <div key={adress.city}>{adress.city}</div>;
        })}
      </div>
    </div>
  );
}
