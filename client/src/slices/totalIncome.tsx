import { createSlice } from "@reduxjs/toolkit";

const totalIncomeSlice = createSlice({
  name: "totalIncome",
  initialState: { totalIncome: 0 },
  reducers: {},
});

export default totalIncomeSlice.reducer;
