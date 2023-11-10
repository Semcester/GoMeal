"use client";

import styles from "./order.module.css";

import Pizza from "@/public/assets/img/pizza-order.png";
import Pizza1 from "@/public/assets/img/pizza1-order.png";
import Burger from "@/public/assets/img/burder-order.png";
import Image from "next/image";

const orders = [
  {
    id: 1,
    img: Pizza,
    label: "Peperoni Pizza",
    count: 1,
    price: 5.59,
    currency: "$",
  },
  {
    id: 2,
    img: Burger,
    label: "Cheese Burger",
    count: 1,
    price: 5.59,
    currency: "$",
  },
  {
    id: 3,
    img: Pizza1,
    label: "Vegan Pizza",
    count: 1,
    price: 5.59,
    currency: "$",
  },
];

export default function OrderMenu() {
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
