"use client";
import { useSelector } from "react-redux";
import Image from "next/image";

import styles from "./order.module.css";

export default function OrderMenu() {
  const orders = useSelector((state) => state.order.data);

  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.heading}>Order Menu</h1>
      </div>
      {orders.map((order) => {
        return (
          <div className={styles.orders} key={order.id}>
            <div className={styles.start}>
              <Image src={order.img} alt={order.id} />
              <div className={styles.info}>
                <h4>{order.label}</h4>
                <span>x{order.count}</span>
              </div>
            </div>
            <div className={styles.alignment}>
              <span className={styles.price}>
                +<span className={styles.currency}>{order.currency}</span>
                {order.price}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
