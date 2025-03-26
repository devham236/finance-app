import { createSlice } from "@reduxjs/toolkit";
import { genCurrentMonth } from "../../utils/helpers/methods";

const currentMonth = genCurrentMonth();

const timePickerSlice = createSlice({
  name: "timePicker",
  initialState: { months: [], selectedMonth: currentMonth },
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
