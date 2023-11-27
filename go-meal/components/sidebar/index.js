"use client";

import Image from "next/image";
import { useState } from "react";
import { redirect, usePathname } from "next/navigation";

import styles from "./sidebar.module.css";

import { Home, FoodOrder, Favorite, OrderHistory } from "@/components/icons";
import Settings from "@/public/assets/icons/Setting.svg";
import Logo from "@/public/assets/icons/GoMeal..png";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function SideBar() {
  const session = useSession();

  const [activeTab, setActiveTab] = useState("");
  const pathname = usePathname();

  if (pathname === "/settings" && session.status === "unauthenticated") {
    redirect("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={Logo} alt={"Logo"} />
        <div>
          <ul>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <li
                onClick={() => setActiveTab("/")}
                className={pathname === "/" ? styles.active : ""}
              >
                <div className={activeTab ? styles.active : styles.icon}>
                  <Home />
                </div>
                <span>Home</span>
              </li>
            </Link>
            <Link href={"/foodorder"} style={{ textDecoration: "none" }}>
              <li
                onClick={() => setActiveTab("/foodorder")}
                className={pathname === "/foodorder" ? styles.active : ""}
              >
                <div className={activeTab ? styles.active : styles.icon}>
                  <FoodOrder />
                </div>
                <span>Food Order</span>
              </li>
            </Link>
            <Link href={"/favorite"} style={{ textDecoration: "none" }}>
              <li
                onClick={() => setActiveTab("/favorite")}
                className={pathname === "/favorite" ? styles.active : ""}
              >
                <div className={activeTab ? styles.active : styles.icon}>
                  <Favorite />
                </div>
                <span>Favorite</span>
              </li>
            </Link>
            <Link href={"/orderhistory"} style={{ textDecoration: "none" }}>
              <li
                onClick={() => setActiveTab("/orderhistory")}
                className={pathname === "/orderhistory" ? styles.active : ""}
              >
                <div className={activeTab ? styles.active : styles.icon}>
                  <OrderHistory />
                </div>
                <span>Order History</span>
              </li>
            </Link>
            {session.status === "authenticated" && (
              <Link href={"/settings"} style={{ textDecoration: "none" }}>
                <li
                  onClick={() => setActiveTab("/settings")}
                  className={pathname === "/settings" ? styles.active : ""}
                >
                  <div className={activeTab ? styles.active : styles.icon}>
                    <Settings />
                  </div>
                  <span>Settings</span>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
