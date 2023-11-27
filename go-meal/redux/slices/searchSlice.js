import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "total",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload.toLowerCase();
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
