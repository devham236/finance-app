import { createSlice } from "@reduxjs/toolkit";

const totalIncomeSlice = createSlice({
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

export const { calcTotalIncome } = totalIncomeSlice.actions;
export default totalIncomeSlice.reducer;
