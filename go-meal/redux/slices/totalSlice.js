import { createSlice } from "@reduxjs/toolkit";

const totalSlice = createSlice({
  name: "total",
  initialState: {
    isLoading: false,
    serviceFee: 1,
    total: 0.0,
    discount: 20,
    isError: false,
    isCouponUsed: false,
  },
  reducers: {
    addOrder: (state, action) => {
      state.total = parseFloat(
        (state.total + parseFloat(action.payload.price)).toFixed(2),
      );
    },
    addCoupon: (state, action) => {
      if (action.payload.couponCode === "20") {
        state.total -= (state.total * state.discount) / 100;
      }
    },
  },
});

export const { addOrder, addCoupon } = totalSlice.actions;
export default totalSlice.reducer;
