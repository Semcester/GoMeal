"use client";
import Search from "@/components/Search/page";
import Advertise from "@/components/advertise";

import styles from "./page.module.css";
import Category from "@/components/category";
import Popular from "@/components/popular";
import { GoTop } from "@/components/icons";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className={styles.container}>
      <Search />
      <Advertise />
      <Category />
      <Popular />
      <div
        className={`${isVisible ? styles.goTop : styles.hiddenGoTop}`}
        onClick={scrollToTop}
      >
        <GoTop className={styles.goTopIcon} />
      </div>
    </main>
  );
}
