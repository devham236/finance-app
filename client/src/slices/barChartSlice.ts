import { createSlice } from "@reduxjs/toolkit";

const barChartSlice = createSlice({
  name: "barChart",
  initialState: {
    data: <any>[],
  },
  reducers: {
    addExpense: (state, action) => {
      const { color, expense, label } = action.payload;
      state.data = [
        ...state.data,
        { id: crypto.randomUUID(), value: expense, label: label, color: color },
      ];
    },
    resetBarChartData: (state) => {
      localStorage.removeItem("persist:barChart");
      state.data = [];
    },
  },
});

export const { addExpense, resetBarChartData } = barChartSlice.actions;
export default barChartSlice.reducer;
