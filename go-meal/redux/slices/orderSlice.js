import { createSlice } from "@reduxjs/toolkit";
import Pizza from "@/public/assets/img/pizza-order.png";
import Burger from "@/public/assets/img/burder-order.png";
import Pizza1 from "@/public/assets/img/pizza1-order.png";
import { act } from "react-dom/test-utils";

const orderSlice = createSlice({
  name: "recentOrder",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {
    addOrderList: (state, action) => {
      const existingOrder = state.data.find(
        (order) => order.id === action.payload.id,
      );
      if (existingOrder) {
        existingOrder.quantity += 1;
      } else {
        state.data.push(action.payload);
      }
    },
    removeOrder: (state, action) => {
      console.log("STATE", state.data);
      console.log("action", action.payload.label);

      const same = state.data.filter(
        (item) => item.label === action.payload.label,
      );
      console.log("SAME", state.data);
    },
  },
});

export const { addOrderList, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
