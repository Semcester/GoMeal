"use client";

import styles from "./page.module.css";

import Advertise from "@/components/advertise";
import Category from "@/components/category";
import Popular from "@/components/popular";
import RecentOrders from "@/components/recent";
import Settings from "@/app/settings/page";
import Foods from "@/components/foods";

export default function Home() {
  return (
    <main className={styles.container}>
      <Category />
        <Foods/>
      <Popular showAllFavorite={false} />
      <RecentOrders />
    </main>
  );
}
