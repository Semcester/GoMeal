import { createSlice } from "@reduxjs/toolkit";

import { adressMock } from "@/mockData/adress";

const userSlice = createSlice({
  name: "user",
  initialState: {
    session: {},
    data: [],
    adresses: [adressMock],
    selectedAdress: {
      id: 1,
      city: "Istanbul",
      adressLine: "50, YIL MAH 50, YIL CAD 27134 SOK NO:30/A",
    },
  },
  reducers: {
    changeDeliveryAdress: (state, action) => {
      state.selectedAdress = action.payload;
    },
  },
});

export const { changeDeliveryAdress } = userSlice.actions;
export default userSlice.reducer;
