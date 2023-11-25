import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    formName: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.formName = action.payload.formName;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.formName = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
