import { createSlice } from "@reduxjs/toolkit";

const barChartSlice = createSlice({
  name: "barChart",
  initialState: {
    data: [
      {
        id: crypto.randomUUID(),
        expense: 200,
        label: "Rent",
        color: "red",
      },
      {
        id: crypto.randomUUID(),
        expense: 100,
        label: "Groceries",
        color: "yellow",
      },
    ],
  },
  reducers: {
    addExpense: (state, action) => {},
    resetBarChartData: (state, action) => {},
  },
});

export const { addExpense, resetBarChartData } = barChartSlice.actions;
export default barChartSlice.reducer;
