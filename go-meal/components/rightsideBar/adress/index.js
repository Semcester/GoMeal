"use client";

import Link from "next/link";

import { Location } from "@/components/icons";

import styles from "./adress.module.css";

export default function Adress() {
  return (
    <div className={styles.container}>
      <span>Your Adress</span>
      <div className={styles.actions}>
        <div className={styles.street}>
          <Location />
          <span>Elm Street, 23</span>
        </div>
        <button className={styles.changeBtn}>Change</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.{" "}
      </p>
      <button className={styles.noteBtn}>Add Note</button>
    </div>
  );
}
