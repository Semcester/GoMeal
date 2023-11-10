"use client";
import styles from "./recentcard.module.css";
import Image from "next/image";

import "@smastrom/react-rating/style.css";

import { Love, LoveLiked } from "@/components/icons";
import { useState } from "react";

export default function RecentOrdersCard({ item }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Image width={200} height={156} src={item.img} alt={item.label} />
        <div onClick={() => setLiked(!liked)}>
          {liked ? (
            <LoveLiked className={styles.lovedIcon} />
          ) : (
            <Love className={styles.loveIcon} />
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
