"use client";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";

import styles from "./popular.module.css";

import RecentOrdersCard from "@/components/recent/recentCard/";
import Arrow from "@/public/assets/img/chevron-down.png";
import {fetchRecentOrders} from "@/redux/slices/recentOrderSlice";

export default function RecentOrders() {
  const recentOrders = useSelector((state) => state.recentOrder.data);
  const dispatch = useDispatch()
  const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        dispatch(fetchRecentOrders())
    }, []);

    if(recentOrders.isLoading){
        return <div>Loading....</div>
    }

    let visibleElements=[]

    if(!recentOrders.isLoading) visibleElements = showAll ? recentOrders : recentOrders.slice(0, 3);

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
