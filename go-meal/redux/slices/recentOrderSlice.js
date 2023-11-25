import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {generateApiEndpoint} from "@/utils";
import axios from "axios";


export const fetchRecentOrders = createAsyncThunk("foods/fetchRecentOrders", async () => {
  const token = ' xiNdzJ_RfGrIonfeTWHd1XBqXozTyIkV'
  const url = generateApiEndpoint("items/ecommerce_order");
  return await axios.get(url,{
    headers: {Authorization: 'Bearer'+ token}
  });
});

const recentOrderSlice = createSlice({
  name: "recentOrder",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchRecentOrders.pending, (state)=>{
      state.isLoading = true;
    })
    builder.addCase(fetchRecentOrders.fulfilled, (state,action)=>{
      state.data = action.payload.data.data
      state.isLoading = false;
    })
    builder.addCase(fetchRecentOrders.rejected,(state)=>{
      state.isError = true;
      state.isLoading = false;
    })
  }
});

export const {} = recentOrderSlice.actions;
export default recentOrderSlice.reducer;
