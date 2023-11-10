"use client";
import styles from "./popular.module.css";
import RecentOrdersCard from "@/components/recent/recentCard/";
import Image from "next/image";

import Arrow from "@/public/assets/img/chevron-down.png";
import { useState } from "react";

const recentOrders = [
  {
    id: 1,
    img: "/assets/img/pizza-recent.png",
    label: "Fish Pizza",
    price: 5.59,
    currency: "$",
    location: "4.97 km",
    time: "21 min",
  },
  {
    id: 2,
    img: "/assets/img/ramen-recent.png",
    label: "Japon Ramen",
    price: 6.09,
    currency: "$",
    location: "4.97 km",
    time: "21 min",
  },
  {
    id: 3,
    img: "/assets/img/rice-recent.png",
    label: "Fried Rice",
    price: 11.5,
    currency: "$",
    location: "4.97 km",
    time: "21 min",
  },
  {
    id: 4,
    img: "/assets/img/pizza-recent.png",
    label: "Fish Pizza",
    price: 5.59,
    currency: "$",
    location: "4.97 km",
    time: "21 min",
  },
  {
    id: 5,
    img: "/assets/img/ramen-recent.png",
    label: "Japon Ramen",
    price: 6.09,
    currency: "$",
    location: "4.97 km",
    time: "21 min",
  },
  {
    id: 6,
    img: "/assets/img/rice-recent.png",
    label: "Fried Rice",
    price: 11.5,
    currency: "$",
    location: "4.97 km",
    time: "21 min",
  },
];

export default function RecentOrders() {
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
