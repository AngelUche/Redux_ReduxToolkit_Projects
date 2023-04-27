import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
}

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    OpenModal: (state, action) => {
      state.isModalOpen = true
    },
    CloseModal: (state, action) => {
      state.isModalOpen = false
    }
  }
});

export const { OpenModal, CloseModal } = ModalSlice.actions;

export default ModalSlice.reducer