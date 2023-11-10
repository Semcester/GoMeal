"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./rightsidebar.module.css";

import Header from "@/components/rightsideBar/header";
import Balance from "@/components/rightsideBar/balance";
import Adress from "@/components/rightsideBar/adress";
import OrderMenu from "@/components/rightsideBar/order";
import Total from "@/components/rightsideBar/total";

export default function RightsideBar() {
  const [isFoodOrder, setIsFoodOrder] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/foodorder") {
      setIsFoodOrder(true);
    } else {
      setIsFoodOrder(false);
    }
  }, [pathName]);

  if (isFoodOrder) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Header />
          <Balance />
          <Adress />
          <Total btnLabel={"Checkout"} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Balance />
        <Adress />
        <OrderMenu />
        <Total btnLabel={"Checkout"} />
      </div>
    </div>
  );
}
