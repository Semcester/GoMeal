import { createSlice } from "@reduxjs/toolkit";

const recentOrderSlice = createSlice({
  name: "recentOrder",
  initialState: {
    isLoading: false,
    data: [
      {
        id: 1,
        img: "/assets/img/pizza-recent.png",
        label: "Fish Pizza",
        price: 5.59,
        currency: "$",
        location: "4.97 km",
        time: "21 min",
      },
      {
        id: 2,
        img: "/assets/img/ramen-recent.png",
        label: "Japon Ramen",
        price: 6.09,
        currency: "$",
        location: "4.97 km",
        time: "21 min",
      },
      {
        id: 3,
        img: "/assets/img/rice-recent.png",
        label: "Fried Rice",
        price: 11.5,
        currency: "$",
        location: "4.97 km",
        time: "21 min",
      },
      {
        id: 4,
        img: "/assets/img/pizza-recent.png",
        label: "Fish Pizza",
        price: 5.59,
        currency: "$",
        location: "4.97 km",
        time: "21 min",
      },
      {
        id: 5,
        img: "/assets/img/ramen-recent.png",
        label: "Japon Ramen",
        price: 6.09,
        currency: "$",
        location: "4.97 km",
        time: "21 min",
      },
      {
        id: 6,
        img: "/assets/img/rice-recent.png",
        label: "Fried Rice",
        price: 11.5,
        currency: "$",
        location: "4.97 km",
        time: "21 min",
      },
    ],
    isError: false,
  },
  reducers: {},
});

export const {} = recentOrderSlice.actions;
export default recentOrderSlice.reducer;
