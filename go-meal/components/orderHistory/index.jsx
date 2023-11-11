"use client";
import { useSelector } from "react-redux";

import styles from "./orderhistory.module.css";
import OrderHistoryCard from "@/components/orderHistory/OrderHistoryCard";

export default function OrderHistoryComponent() {
  const ordersHistory = useSelector((state) => state.orderHistory.data);

  return (
    <div className={styles.container}>
      {ordersHistory.map((order) => {
        return (
          <div key={order.id}>
            <OrderHistoryCard orders={order} />
          </div>
        );
      })}
    </div>
  );
}
