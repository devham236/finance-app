import { createSlice } from "@reduxjs/toolkit";

const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    goalsData: [],
  },
  reducers: {},
});

export default goalsSlice.reducer;
