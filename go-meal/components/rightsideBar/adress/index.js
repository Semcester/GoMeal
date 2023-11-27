"use client";

import { Location } from "@/components/icons";

import styles from "./adress.module.css";
import { useSelector } from "react-redux";

export default function Adress() {
  const adress = useSelector((state) => state.user.selectedAdress);

  return (
    <div className={styles.container}>
      <span>Your Adress</span>
      <div className={styles.actions}>
        <div className={styles.street}>
          <Location />
          <div className={styles.adressContainer}>
            <span>{adress.city}</span>
            <p>{adress.adressLine}</p>
          </div>
        </div>
        <button className={styles.changeBtn}>Change</button>
      </div>

      <button className={styles.noteBtn}>Add Note</button>
    </div>
  );
}
