"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

import { addFavorite, removeFavorite } from "@/redux/slices/popularSlice";

import "@smastrom/react-rating/style.css";
import styles from "./recentcard.module.css";

import { Love, LoveLiked } from "@/components/icons";

export default function RecentOrdersCard({ item }) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  const handleAddFavorite = (item) => {
    dispatch(addFavorite(item));
  };
  const handleRemoveFavorite = (item) => {
    dispatch(removeFavorite(item));
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Image width={200} height={156} src={item.img} alt={item.label} />
        <div onClick={() => setLiked(!liked)}>
          {liked ? (
            <LoveLiked
              className={styles.lovedIcon}
              onClick={() => handleRemoveFavorite(item)}
            />
          ) : (
            <Love
              className={styles.loveIcon}
              onClick={() => handleAddFavorite(item)}
            />
          )}
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.priceInfo}>
          <span>{item.label}</span>
          <p>
            <span>{item.currency}</span>
            {item.price}
          </p>
          <span className={styles.locationTime}>
            {item.location} - {item.time}
          </span>
        </div>
      </div>
    </div>
  );
}
