import { createSlice } from "@reduxjs/toolkit";

const popularSlice = createSlice({
  name: "popular",
  initialState: {
    isLoading: false,
    data: [
      {
        id: 1,
        img: "/assets/img/burger0.png",
        label: "Fish Burger",
        price: 5.59,
        currency: "$",
        starCount: 2,
        discount: "15%",
      },
      {
        id: 2,
        img: "/assets/img/burger1.png",
        label: "Beef Burger",
        price: 6.09,
        currency: "$",
        starCount: 4,
        discount: "25%",
      },
      {
        id: 3,
        img: "/assets/img/burger2.png",
        label: "Steak Burger",
        price: 11.5,
        currency: "$",
        starCount: 3,
        discount: "5%",
      },
      {
        id: 4,
        img: "/assets/img/burger0.png",
        label: "Fish Burger",
        price: 5.59,
        currency: "$",
        starCount: 2,
        discount: "15%",
      },
      {
        id: 5,
        img: "/assets/img/burger1.png",
        label: "Beef Burger",
        price: 6.09,
        currency: "$",
        starCount: 4,
        discount: "25%",
      },
      {
        id: 6,
        img: "/assets/img/burger2.png",
        label: "Steak Burger",
        price: 11.5,
        currency: "$",
        starCount: 3,
        discount: "5%",
      },
    ],
    isError: false,
  },
  reducers: {},
});

export const {} = popularSlice.actions;
export default popularSlice.reducer;
