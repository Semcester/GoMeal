"use client";

import { useEffect, useState } from "react";
import styles from "./goto.module.css";
import { GoTop } from "@/components/icons";

export default function GoTopComponent() {
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
    <div
      className={`${isVisible ? styles.goTop : styles.hiddenGoTop}`}
      onClick={scrollToTop}
    >
      <GoTop />
    </div>
  );
}
