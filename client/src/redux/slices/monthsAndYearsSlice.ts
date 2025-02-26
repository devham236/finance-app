import { createSlice } from "@reduxjs/toolkit";

const monthsAndYearsSlice = createSlice({
  name: "monthsAndYears",
  initialState: { months: [], years: [] },
  reducers: {},
});

export default monthsAndYearsSlice.reducer;
