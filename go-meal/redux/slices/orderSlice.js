import { createSlice } from "@reduxjs/toolkit";
import Pizza from "@/public/assets/img/pizza-order.png";
import Burger from "@/public/assets/img/burder-order.png";
import Pizza1 from "@/public/assets/img/pizza1-order.png";

const orderSlice = createSlice({
  name: "recentOrder",
  initialState: {
    isLoading: false,
    data: [
      {
        id: 1,
        img: Pizza,
        label: "Peperoni Pizza",
        count: 1,
        price: 5.59,
        currency: "$",
      },
      {
        id: 2,
        img: Burger,
        label: "Cheese Burger",
        count: 1,
        price: 5.59,
        currency: "$",
      },
      {
        id: 3,
        img: Pizza1,
        label: "Vegan Pizza",
        count: 1,
        price: 5.59,
        currency: "$",
      },
    ],
    isError: false,
  },
  reducers: {},
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
