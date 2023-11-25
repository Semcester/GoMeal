"use client";

import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";

import styles from "./category.module.css";

import CategoryCard from "@/components/category/categoryCard";
import Arrow from "@/public/assets/img/chevron-down.png";
import { fetchCategories } from "@/redux/slices/categorySlice";
import CategorySkeleton from './Skeleton'

export default function Category() {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category);
  const [showAll, setShowAll] = useState(false);
  const [activeCategoryID, setActiveCategoryID] = useState(null);


  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  if(categories.isLoading){
    return <div>Loading....</div>
  }

  let visibleElements=[]

  if(!categories.isLoading) visibleElements = showAll ? categories.data : categories.data.slice(0, 8);

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
                image={category.icon}
                name={category.name}
                isAll={category.isAll}
                selected={activeCategoryID === category.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
