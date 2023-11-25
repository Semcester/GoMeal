"use client";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addOrder } from "@/redux/slices/totalSlice";
import { addOrderList } from "@/redux/slices/orderSlice";

import styles from "./foodcard.module.css";
import Image from "next/image";

import { Rating as ReactRating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Love, LoveLiked } from "@/components/icons";

export default function FoodCard({ item }) {

  const dispatch = useDispatch();
  const state = useSelector(state=>state.foods)
  const [rating, setRating] = useState(5);
  const [liked, setLiked] = useState(false);
  let renderImage;


  const imgUrl = "https://static.smartlimon.com/" + item.thumbnail;

  if(state.isMockData){
    renderImage = item.icon
  }else{
    renderImage= item.isAll ? item.icon : imgUrl + item.image;
  }
  const handleOrder = (item) => {
    dispatch(addOrder(item));
    dispatch(addOrderList(item));
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        {item.discount > 0 && <div className={styles.labels}>{item.discount} Off</div>}
        <div onClick={() => setLiked(!liked)}>
          {liked ? (
            <LoveLiked className={styles.lovedIcon} />
          ) : (
            <Love className={styles.loveIcon} />
          )}
        </div>
      </div>
      <Image width={150} height={120} src={renderImage} alt={item.name} />
      <div className={styles.infoWrapper}>
        <ReactRating
          style={{ maxWidth: 100 }}
          value={item.star}
          onChange={() => setRating(item.starCount)}
        />
        <div className={styles.priceInfo}>
          <div>
            <span>{item.name}</span>
            <p>
              <span>$</span>
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
