"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "@/redux/slices/totalSlice";
import { addOrderList } from "@/redux/slices/orderSlice";

import styles from "./popularcard.module.css";
import Image from "next/image";

import { Rating as ReactRating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Love, LoveLiked } from "@/components/icons";

export default function PopularCard({ item }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(5);
  const [liked, setLiked] = useState(false);
  const handleOrder = (item) => {
    dispatch(addOrder(item));
    dispatch(addOrderList(item));
  };
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.labels}>{item.discount} Off</div>
        <div onClick={() => setLiked(!liked)}>
          {liked ? (
            <LoveLiked className={styles.lovedIcon} />
          ) : (
            <Love className={styles.loveIcon} />
          )}
        </div>
      </div>
      <Image width={200} height={156} src={item.img} alt={item.label} />
      <div className={styles.infoWrapper}>
        <ReactRating
          style={{ maxWidth: 100 }}
          value={item.starCount}
          onChange={() => setRating(item.starCount)}
        />
        <div className={styles.priceInfo}>
          <div>
            <span>{item.label}</span>
            <p>
              <span>{item.currency}</span>
              {item.price}
            </p>
          </div>
          <button className={styles.plusBtn} onClick={() => handleOrder(item)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
