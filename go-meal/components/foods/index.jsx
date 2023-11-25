"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import styles from "./food.module.css";

import Arrow from "@/public/assets/img/chevron-down.png";
import { fetchFoods } from "@/redux/slices/foodSlice";
import FoodCard from "@/components/foods/foodCard";
import { ValidationError as food } from "yup";

export default function Foods({ showAllFavorite }) {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods.data);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  if (foods?.isLoading) {
    return <div>Loading....</div>;
  }

  let visibleElements = [];

  if (!foods?.isLoading) visibleElements = showAll ? foods : foods?.slice(0, 4);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Foods</h1>

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
        {visibleElements?.map((food) => {
          return <FoodCard isAll={food.isAll} key={food.id} item={food} />;
        })}
      </div>
    </div>
  );
}
