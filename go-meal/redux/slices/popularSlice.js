import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { generateApiEndpoint } from "@/utils";
import axios from "axios";
import { fetchFoods } from "@/redux/slices/foodSlice";
import { foodMock } from "@/mockData/foodMock";

export const fetchPopular = createAsyncThunk("foods/fetchPopular", async () => {
  const token = " xiNdzJ_RfGrIonfeTWHd1XBqXozTyIkV";
  const url = generateApiEndpoint(
    "items/ecommerce_product?filter[is_popular]=true",
  );
  return await axios.get(url, {
    headers: { Authorization: "Bearer" + token },
  });
});

const popularSlice = createSlice({
  name: "popular",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    isMockData: false,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.data.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.data.filter((item) => item.id === action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopular.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPopular.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(fetchPopular.rejected, (state) => {
      state.data = foodMock;
      state.isMockData = true;
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { addFavorite, removeFavorite } = popularSlice.actions;
export default popularSlice.reducer;
