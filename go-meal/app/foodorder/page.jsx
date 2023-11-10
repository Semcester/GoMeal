"use client";
import { useState } from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import styles from "./foodorder.module.css";

import OrderMenu from "@/components/rightsideBar/order";
import Cards from "react-credit-cards-2";

export default function FoodOrder() {
  const [creditCard, setCreditCard] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setCreditCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setCreditCard((prev) => ({ ...prev, focus: evt.target.name }));
  };
  return (
    <div className={styles.container}>
      <OrderMenu />
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <span>Payment</span>
          <input
            type={"text"}
            placeholder={"Card Holder Name"}
            className={styles.couponInput}
            onChange={(e) =>
              setCreditCard({ ...creditCard, name: e.target.value })
            }
            onFocus={handleInputFocus}
          />
          <input
            type={"number"}
            placeholder={"Card Number"}
            className={styles.couponInput}
            onChange={(e) =>
              setCreditCard({
                ...creditCard,
                number: e.target.value.toUpperCase(),
              })
            }
          />
          <div className={styles.creditCardInputs}>
            <input
              type={"number"}
              placeholder={"CVV"}
              className={styles.creditCard}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type={"number"}
              placeholder={"MM/YY"}
              className={styles.creditCard}
              onChange={(e) =>
                setCreditCard({
                  ...creditCard,
                  expiry: e.target.value.toUpperCase(),
                })
              }
            />
          </div>
        </div>

        <div className={styles.totalContainer}>
          <Cards
            number={creditCard.number}
            expiry={creditCard.expiry}
            cvc={creditCard.cvc}
            name={creditCard.name}
            focused={creditCard.focus}
          />
        </div>
      </div>
    </div>
  );
}
