import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "total",
  initialState: {
    session: {},
  },
  reducers: {
    userLogin: (state, action) => {
      state.session = action.payload;
    },
    userLogout: (state, action) => {
      state.session = {};
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;