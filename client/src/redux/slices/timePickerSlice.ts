import { createSlice } from "@reduxjs/toolkit";

const timePickerSlice = createSlice({
  name: "timePicker",
  initialState: { months: [], selectedMonth: "" },
  reducers: {
    setMonths: (state, action) => {
      state.months = action.payload;
    },
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
  },
});

export const { setMonths, setSelectedMonth } = timePickerSlice.actions;
export default timePickerSlice.reducer;
