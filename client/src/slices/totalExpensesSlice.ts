import { createSlice } from "@reduxjs/toolkit";

const totalExpensesSlice = createSlice({
  name: "totalExpenses",
  initialState: { totalExpenses: 0 },
  reducers: {
    setTotalExpenses: (state, action) => {
      state.totalExpenses = action.payload;
    },
    resetTotalExpenses: (state) => {
      state.totalExpenses = 0;
    },
  },
});

export const { setTotalExpenses, resetTotalExpenses } =
  totalExpensesSlice.actions;
export default totalExpensesSlice.reducer;
