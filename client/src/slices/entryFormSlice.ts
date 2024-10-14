import { createSlice } from "@reduxjs/toolkit";

const entryFormSlice = createSlice({
  name: "entryForm",
  initialState: { isOpen: false, chart: null },
  reducers: {
    toggleEntryForm: (state, action) => {
      state.isOpen = !state.isOpen;
      state.chart = action.payload;
    },
    closeForm: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleEntryForm, closeForm } = entryFormSlice.actions;
export default entryFormSlice.reducer;
