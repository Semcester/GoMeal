import styles from "./categorycard.module.css";
import Image from "next/image";

export default function CategoryCard({ image, label, selected }) {
  return (
    <div className={selected ? styles.activeContainer : styles.container}>
      <Image width={56} height={56} src={image} alt={label} />
      <span>{label}</span>
    </div>
  );
}
