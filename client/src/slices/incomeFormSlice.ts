import { createSlice } from "@reduxjs/toolkit";

const incomeForm = createSlice({
  name: "incomeForm",
  initialState: { isOpen: false, chart: null },
  reducers: {
    toggleIncomeForm: (state, action) => {
      state.isOpen = !state.isOpen;
      state.chart = action.payload;
    },
    closeForm: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleIncomeForm, closeForm } = incomeForm.actions;
export default incomeForm.reducer;
