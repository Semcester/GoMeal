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
        quantity: 1,
      },
      {
        id: 2,
        img: "/assets/img/burger1.png",
        label: "Beef Burger",
        price: 6.09,
        currency: "$",
        starCount: 4,
        discount: "25%",
        quantity: 1,
      },
      {
        id: 3,
        img: "/assets/img/burger2.png",
        label: "Steak Burger",
        price: 11.5,
        currency: "$",
        starCount: 3,
        discount: "5%",
        quantity: 1,
      },
      {
        id: 4,
        img: "/assets/img/burger0.png",
        label: "Fish Burger",
        price: 5.59,
        currency: "$",
        starCount: 2,
        discount: "15%",
        quantity: 1,
      },
      {
        id: 5,
        img: "/assets/img/burger1.png",
        label: "Beef Burger",
        price: 6.09,
        currency: "$",
        starCount: 4,
        discount: "25%",
        quantity: 1,
      },
      {
        id: 6,
        img: "/assets/img/burger2.png",
        label: "Steak Burger",
        price: 11.5,
        currency: "$",
        starCount: 3,
        discount: "5%",
        quantity: 1,
      },
    ],
    isError: false,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.data.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.data.filter((item) => item.id === action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = popularSlice.actions;
export default popularSlice.reducer;
