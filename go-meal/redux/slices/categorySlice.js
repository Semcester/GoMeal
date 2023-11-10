import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    isLoading: false,
    data: [
      { id: 0, img: "/assets/img/all-food.png", label: "All Food" },
      { id: 1, img: "/assets/img/Baked.png", label: "Bakery" },
      { id: 2, img: "/assets/img/Burger.png", label: "Burger" },
      { id: 3, img: "/assets/img/Coffee.png", label: "Beverage" },
      { id: 4, img: "/assets/img/Chicken.png", label: "Chicken" },
      { id: 5, img: "/assets/img/Fast.png", label: "Pizza" },
      { id: 6, img: "/assets/img/Fish.png", label: "Seafood" },
      { id: 7, img: "/assets/img/Fish.png", label: "Seafood" },
      { id: 8, img: "/assets/img/Fish.png", label: "Seafood" },
    ],
    isError: false,
  },
  reducers: {},
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
