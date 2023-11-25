import { createSlice } from "@reduxjs/toolkit";

const orderHistorySlice = createSlice({
  name: "recentOrder",
  initialState: {
    isLoading: false,
    data: [    ],
    isError: false,
  },
  reducers: {},
});

export const {} = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
