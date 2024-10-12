import { createSlice } from "@reduxjs/toolkit";

const barChartSlice = createSlice({
  name: "barChart",
  initialState: {
    data: [
      {
        id: crypto.randomUUID(),
        expense: 200,
        label: "Rent",
        color: "#4d4d4d",
      },
      {
        id: crypto.randomUUID(),
        expense: 100,
        label: "Groceries",
        color: "#4d4d4d",
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
