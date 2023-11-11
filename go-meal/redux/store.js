"use client";

import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "@/redux/slices/categorySlice";
import popularSlice from "@/redux/slices/popularSlice";
import recentOrderSlice from "@/redux/slices/recentOrderSlice";
import orderSlice from "@/redux/slices/orderSlice";
import orderHistorySlice from "@/redux/slices/orderHistorySlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    popular: popularSlice,
    recentOrder: recentOrderSlice,
    order: orderSlice,
    orderHistory: orderHistorySlice,
  },
});
