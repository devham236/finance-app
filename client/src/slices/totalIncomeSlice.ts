import { createSlice } from "@reduxjs/toolkit";

const totalIncomeSlice = createSlice({
  name: "totalIncome",
  initialState: { incomeValue: 0 },
  reducers: {
    setTotalIncome: (state, action) => {
      state.incomeValue = action.payload;
    },
  },
});

export const { setTotalIncome } = totalIncomeSlice.actions;
export default totalIncomeSlice.reducer;
