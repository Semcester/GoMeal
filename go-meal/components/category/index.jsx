"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import styles from "./category.module.css";

import CategoryCard from "@/components/category/categoryCard";
import Arrow from "@/public/assets/img/chevron-down.png";

export default function Category() {
  const categories = useSelector((state) => state.category.data);

  const [showAll, setShowAll] = useState(false);
  const [activeCategoryID, setActiveCategoryID] = useState(null);

  const visibleElements = showAll ? categories : categories.slice(0, 6);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Category</h1>
        <div className={styles.view} onClick={() => setShowAll(true)}>
          <span>View all </span>
          <Image width={24} height={24} src={Arrow} alt={"Arrow"} />
        </div>
      </div>
      <div className={styles.wrapper}>
        {visibleElements.map((category) => {
          return (
            <div
              onClick={() => setActiveCategoryID(category.id)}
              key={category.id}
            >
              <CategoryCard
                image={category.img}
                label={category.label}
                selected={activeCategoryID === category.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
