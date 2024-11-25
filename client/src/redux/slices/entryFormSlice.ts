import { createSlice } from "@reduxjs/toolkit";

const entryFormSlice = createSlice({
  name: "entryForm",
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

export const { toggleEntryForm, closeForm } = entryFormSlice.actions;
export default entryFormSlice.reducer;
