import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/services/client";
import { generateApiEndpoint } from "@/utils";
import { foodMock } from "@/mockData/foodMock";

export const fetchFoods = createAsyncThunk("foods/fetchFoods", async () => {
  const token = " xiNdzJ_RfGrIonfeTWHd1XBqXozTyIkV";
  const url = generateApiEndpoint("items/ecommerce_product");
  return await axios.get(url, {
    headers: { Authorization: "Bearer" + token },
  });
});

const foodsSlice = createSlice({
  name: "foods",
  initialState: {
    isLoading: false,
    data: [],
    filteredFoodsByInput: [],
    isError: false,
    isMockData: false,
  },
  reducers: {
    filterByInput: (state, action) => {
      state.filterByInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFoods.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      state.data = action.payload.data.data;

      state.isLoading = false;
    });
    builder.addCase(fetchFoods.rejected, (state) => {
      state.data = foodMock;
      state.isMockData = true;
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const { filterByInput } = foodsSlice.actions;
export default foodsSlice.reducer;
