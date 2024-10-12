import { createSlice } from "@reduxjs/toolkit";

const totalExpensesSlice = createSlice({
  name: "totalExpenses",
  initialState: { expensesValue: 0 },
  reducers: {
    setTotalExpenses: (state, action) => {
      state.expensesValue = action.payload;
    },
    resetTotalExpenses: (state) => {
      state.expensesValue = 0;
    },
  },
});

export const { setTotalExpenses, resetTotalExpenses } =
  totalExpensesSlice.actions;
export default totalExpensesSlice.reducer;
