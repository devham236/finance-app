import { createSlice } from "@reduxjs/toolkit";

const totalIncomeSlice = createSlice({
  name: "totalIncome",
  initialState: 0,
  reducers: {
    setTotalIncome: (state, action) => {
      return action.payload;
    },

    resetTotalIncome: () => {
      return 0;
    },
  },
});

export const { setTotalIncome } = totalIncomeSlice.actions;
export default totalIncomeSlice.reducer;
