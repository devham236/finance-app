import { createSlice } from "@reduxjs/toolkit";

const totaLIncomeSlice = createSlice({
  name: "totaLIncome",
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

export const { setTotalIncome } = totaLIncomeSlice.actions;
export default totaLIncomeSlice.reducer;
