"use client";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import categorySlice from "@/redux/slices/categorySlice";
import popularSlice from "@/redux/slices/popularSlice";
import recentOrderSlice from "@/redux/slices/recentOrderSlice";
import orderSlice from "@/redux/slices/orderSlice";
import orderHistorySlice from "@/redux/slices/orderHistorySlice";
import modalSlice from "@/redux/slices/modalSlice";
import totalSlice from "@/redux/slices/totalSlice";
import userSlice from "@/redux/slices/userSlice";
import foodSlice from "@/redux/slices/foodSlice";
import searchSlice from "@/redux/slices/searchSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    popular: popularSlice,
    recentOrder: recentOrderSlice,
    order: orderSlice,
    orderHistory: orderHistorySlice,
    modal: modalSlice,
    total: totalSlice,
    user: userSlice,
    foods: foodSlice,
    searchInput: searchSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
