import { createSlice } from "@reduxjs/toolkit";

const incomeForm = createSlice({
  name: "darkmode",
  initialState: { isOpen: false },
  reducers: {
    toggleIncomeForm: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleIncomeForm } = incomeForm.actions;
export default incomeForm.reducer;
