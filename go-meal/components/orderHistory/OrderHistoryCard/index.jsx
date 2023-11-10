import styles from "./orderhistorycard.module.css";
import Image from "next/image";

export default function OrderHistoryCard({ orders }) {
  return (
    <div className={styles.container}>
      <Image width={180} height={180} src={orders.img} alt={orders.label} />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.labelInfo}>
            <span className={styles.label}>{orders.label}</span>
            <span className={styles.deliveryTime}>{orders.deliveryTime}</span>
          </div>
          <div className={styles.currency}>
            <span>{orders.currency}</span>
            <span className={styles.price}>{orders.price}</span>
          </div>
        </div>
        <button className={styles.repeatBtn}>Repeat Order</button>
      </div>
    </div>
  );
}
