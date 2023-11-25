"use client";

import { useDispatch } from "react-redux";
import {useState} from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
import Link from "next/link";
import Image from "next/image";


import { Notification } from "@/components/icons";
import { Settings } from "@/components/icons";
import Avatar from "@/public/assets/img/avatar.jpeg";
import NotificationMenu from "@/components/rightsideBar/header/notification";


import { openModal } from "@/redux/slices/modalSlice";

import styles from "./header.module.css";


export default function Header() {
  const dispatch = useDispatch();
  const { data: session } = useSession();

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [showAvatarAction, setShowAvatarAction] = useState(false);

  const handleLogin = () => {
    dispatch(openModal({ formName: "login" }));
  };

  const handleSignup = () => {
    dispatch(openModal({ formName: "signup" }));
  };

    const closeNotificationMenu = () => {
        setIsNotificationOpen(false);
    };


  if (session) {
    return (
      <div className={styles.container}>
        <div className={styles.actions}>
          <Notification className={styles.notification} onClick={()=>setIsNotificationOpen(!isNotificationOpen)}/>
            <div className={styles.badge}>
                <span>2</span>
            </div>
            {isNotificationOpen &&
                <NotificationMenu
                    closeMenu={closeNotificationMenu}/>}
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
          onClick={()=>setShowAvatarAction(!showAvatarAction)}
        />
          {showAvatarAction && <div className={styles.userAction}>
              <span onClick={()=> signOut()}>Logout</span>
          </div>}
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
