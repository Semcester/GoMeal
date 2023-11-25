import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    session: {},
  },
  reducers: {
    userLogin: (state, action) => {
      console.log('USER SLICE')
      state.session = action.payload;
    },
    userLogout: (state, action) => {
      state.session = {};
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
