"use client";
import Image from "next/image";
import Link from "next/link";

import { Settings, Notification } from "@/components/icons";
import Avatar from "@/public/assets/img/avatar.jpeg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Notification className={styles.notification} />
        <Link href={"/settings"}>
          <Settings className={styles.settings} />
        </Link>
      </div>
      <Image
        width={60}
        height={60}
        src={Avatar}
        alt={"avatar"}
        className={styles.avatar}
      />
    </div>
  );
}
