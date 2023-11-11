import { createSlice } from "@reduxjs/toolkit";

const orderHistorySlice = createSlice({
  name: "recentOrder",
  initialState: {
    isLoading: false,
    data: [
      {
        id: 1,
        img: "/assets/img/tasty-burger-order.png",
        label: "Fish Burger",
        price: 5.59,
        currency: "$",
        deliveryTime: "Its delivered at 1 January 14:53",
      },
      {
        id: 2,
        img: "/assets/img/tasty-burger-order.png",
        label: "Beef Burger",
        price: 6.09,
        currency: "$",
        deliveryTime: "Its delivered at 1 January 14:53",
      },
      {
        id: 3,
        img: "/assets/img/tasty-burger-order.png",
        label: "Steak Burger",
        price: 11.5,
        currency: "$",
        deliveryTime: "Its delivered at 1 January 14:53",
      },
      {
        id: 4,
        img: "/assets/img/tasty-burger-order.png",
        label: "Fish Burger",
        price: 5.59,
        currency: "$",
        deliveryTime: "Its delivered at 1 January 14:53",
      },
    ],
    isError: false,
  },
  reducers: {},
});

export const {} = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
