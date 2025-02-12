import { createSlice } from "@reduxjs/toolkit";

const newEntrySlice = createSlice({
  name: "newEntry",
  initialState: { isOpen: false, entry: null },
  reducers: {
    toggleEntryForm: (state, action) => {
      state.isOpen = !state.isOpen;
      state.entry = action.payload;
    },
    closeForm: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleEntryForm, closeForm } = newEntrySlice.actions;
export default newEntrySlice.reducer;
