"use client";
import styles from "./popular.module.css";
import PopularCard from "@/components/popular/popularCard";
import Image from "next/image";

import Arrow from "@/public/assets/img/chevron-down.png";
import { useState } from "react";

const popularFoods = [
  {
    id: 1,
    img: "/assets/img/burger0.png",
    label: "Fish Burger",
    price: 5.59,
    currency: "$",
    starCount: 2,
    discount: "15%",
  },
  {
    id: 2,
    img: "/assets/img/burger1.png",
    label: "Beef Burger",
    price: 6.09,
    currency: "$",
    starCount: 4,
    discount: "25%",
  },
  {
    id: 3,
    img: "/assets/img/burger2.png",
    label: "Steak Burger",
    price: 11.5,
    currency: "$",
    starCount: 3,
    discount: "5%",
  },
  {
    id: 4,
    img: "/assets/img/burger0.png",
    label: "Fish Burger",
    price: 5.59,
    currency: "$",
    starCount: 2,
    discount: "15%",
  },
  {
    id: 5,
    img: "/assets/img/burger1.png",
    label: "Beef Burger",
    price: 6.09,
    currency: "$",
    starCount: 4,
    discount: "25%",
  },
  {
    id: 6,
    img: "/assets/img/burger2.png",
    label: "Steak Burger",
    price: 11.5,
    currency: "$",
    starCount: 3,
    discount: "5%",
  },
];

export default function Popular({ showAllFavorite }) {
  const [showAll, setShowAll] = useState(false);

  let visibleElements = popularFoods;

  if (!showAllFavorite)
    visibleElements = showAll ? popularFoods : popularFoods.slice(0, 3);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Popular</h1>
        <div>
          {!showAllFavorite && (
            <div className={styles.view} onClick={() => setShowAll(true)}>
              <span>View all </span>
              <Image width={24} height={24} src={Arrow} alt={"Arrow"} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.wrapper}>
        {visibleElements.map((menu) => {
          return <PopularCard key={menu.id} item={menu} />;
        })}
      </div>
    </div>
  );
}
