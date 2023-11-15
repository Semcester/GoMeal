"use client";

import { useDispatch } from "react-redux";
import { openModal } from "@/redux/slices/modalSlice";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.css";

import { Settings } from "@/components/icons";
import Avatar from "@/public/assets/img/avatar.jpeg";
import { Notification } from "@/components/icons";

export default function Header() {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const handleLogin = () => {
    dispatch(openModal({ formName: "login" }));
  };

  const handleSignup = () => {
    dispatch(openModal({ formName: "signup" }));
  };

  if (session) {
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

  return (
    <div className={styles.actions}>
      <button className={styles.login} onClick={handleLogin}>
        Login
      </button>
      <button className={styles.signup} onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
}
