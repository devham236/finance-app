import { createSlice } from "@reduxjs/toolkit";
import { NewExpense } from "../utils/types/types";

const barChartSlice = createSlice({
  name: "barChart",
  initialState: {
    data: [
      {
        id: 1,
        expense: 200,
        label: "Rent",
        color: "red",
      },
      {
        id: 2,
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
