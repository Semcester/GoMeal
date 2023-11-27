"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import styles from "./popular.module.css";

import PopularCard from "@/components/popular/popularCard";
import Arrow from "@/public/assets/img/chevron-down.png";
import { fetchPopular } from "@/redux/slices/popularSlice";

export default function Popular({ showAllFavorite }) {
  const dispatch = useDispatch();
  const popularFoods = useSelector((state) => state.popular.data);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchPopular());
  }, []);

  if (popularFoods?.isLoading) {
    return <div>Loading....</div>;
  }
  let visibleElements = [];

  if (!popularFoods?.isLoading)
    visibleElements = showAll ? popularFoods : popularFoods.slice(0, 4);

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
        {visibleElements?.map((menu) => {
          return <PopularCard key={menu.id} item={menu} />;
        })}
      </div>
    </div>
  );
}
