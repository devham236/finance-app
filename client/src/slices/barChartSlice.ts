import { createSlice } from "@reduxjs/toolkit";

const barChartSlice = createSlice({
  name: "barChart",
  initialState: {
    data: [
      {
        id: crypto.randomUUID(),
        value: 200,
        label: "Rent",
        color: "red",
      },
      {
        id: crypto.randomUUID(),
        value: 100,
        label: "Groceries",
        color: "rgb(50, 168, 82)",
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
