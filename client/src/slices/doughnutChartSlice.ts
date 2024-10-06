import { createSlice } from "@reduxjs/toolkit";

const doughnutChartSlice = createSlice({
  name: "totalIncome",
  initialState: { totalIncome: 0 },
  reducers: {
    calcTotalIncome: (state, action) => {
      state.totalIncome = action.payload.reduce((prev, curr) => {
        return prev + curr;
      }, 0);
    },
  },
});

export const { calcTotalIncome } = doughnutChartSlice.actions;
export default doughnutChartSlice.reducer;
