import { createSlice } from "@reduxjs/toolkit";

const barChartSlice = createSlice({
  name: "barChart",
  initialState: {
    barData: <any>[],
  },
  reducers: {
    addExpense: (state, action) => {
      const { color, expense, label } = action.payload;
      state.barData = [
        ...state.barData,
        { id: crypto.randomUUID(), value: expense, label: label, color: color },
      ];
    },
    resetBarChartData: (state) => {
      localStorage.removeItem("persist:barChart");
      state.barData = [];
    },
  },
});

export const { addExpense, resetBarChartData } = barChartSlice.actions;
export default barChartSlice.reducer;
