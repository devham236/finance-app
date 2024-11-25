import { createSlice } from "@reduxjs/toolkit";

const totalIncomeSlice = createSlice({
  name: "totalIncome",
  initialState: { incomeValue: 0 },
  reducers: {
    setTotalIncome: (state, action) => {
      state.incomeValue = action.payload;
    },
    resetTotalIncome: (state) => {
      state.incomeValue = 0;
    },
  },
});

export const { setTotalIncome, resetTotalIncome } = totalIncomeSlice.actions;
export default totalIncomeSlice.reducer;
