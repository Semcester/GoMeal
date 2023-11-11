"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import styles from "./popular.module.css";

import RecentOrdersCard from "@/components/recent/recentCard/";
import Arrow from "@/public/assets/img/chevron-down.png";

export default function RecentOrders() {
  const recentOrders = useSelector((state) => state.recentOrder.data);
  const [showAll, setShowAll] = useState(false);

  const visibleElements = showAll ? recentOrders : recentOrders.slice(0, 3);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Recent Order</h1>
        <div>
          <div className={styles.view} onClick={() => setShowAll(true)}>
            <span>View all </span>
            <Image width={24} height={24} src={Arrow} alt={"Arrow"} />
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        {visibleElements.map((menu) => {
          return <RecentOrdersCard key={menu.id} item={menu} />;
        })}
      </div>
    </div>
  );
}
