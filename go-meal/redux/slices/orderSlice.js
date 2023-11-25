import { createSlice } from "@reduxjs/toolkit";


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
     state.data.filter(
        (item) => item.id === action.payload.id,
      );
    },
  },
});

export const { addOrderList, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;
