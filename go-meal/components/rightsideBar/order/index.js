"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import styles from "./order.module.css";
import { removeOrder } from "@/redux/slices/orderSlice";

export default function OrderMenu() {
  const orders = useSelector((state) => state.order.data);
  const dispatch = useDispatch();

  if (orders.length < 0) {
    alert("ZERO");
  }

  const handleRemove = (order) => {
    dispatch(removeOrder(order));
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.heading}>Order Menu</h1>
      </div>
      {orders?.map((order) => {
        return (
          <div className={styles.orders} key={order.id}>
            <div className={styles.start}>
              <Image width={80} height={80} src={order.img} alt={order.id} />
              <div className={styles.info}>
                <h4>{order.label}</h4>
                <span>x{order.quantity}</span>
              </div>
            </div>
            <div className={styles.alignment}>
              <span className={styles.price}>
                +<span className={styles.currency}>{order.currency}</span>
                {order.price}
              </span>
              <button
                className={styles.removeBtn}
                onClick={() => handleRemove(order)}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
