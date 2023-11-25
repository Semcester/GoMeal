import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { generateApiEndpoint } from "@/utils";

import {categoryMock} from "@/mockData/categoryMock";


export const fetchCategories = createAsyncThunk("foods/fetchCategories", async () => {
  const token = ' xiNdzJ_RfGrIonfeTWHd1XBqXozTyIkV'
  const url = generateApiEndpoint("items/ecommerce_category");
  return await axios.get(url,{
    headers: {Authorization: 'Bearer'+ token}
  });
});

const categorySlice = createSlice({
  name: "category",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    isMockData:false
  },
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchCategories.pending, (state)=>{
      state.isLoading = true;
    })
    builder.addCase(fetchCategories.fulfilled, (state,action)=>{
      state.data = [ { id: 1, icon: "/assets/img/all-food.png", name: "all-food" , isAll:true} ,...action.payload.data.data]
      state.isLoading = false;
    })
    builder.addCase(fetchCategories.rejected,(state)=>{
      state.data = categoryMock
      state.isMockData = true
      state.isError = true;
      state.isLoading = false;
    })
  }
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
