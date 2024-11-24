import { createSlice } from "@reduxjs/toolkit";
import { addExpense, getExpenses } from "../utils/thunks/expenseThunks";

const barChartSlice = createSlice({
  name: "barChart",
  initialState: {
    barData: <any>[],
    loading: false,
    error: "",
  },
  reducers: {
    // addExpense: (state, action) => {
    //   const { color, expense, label } = action.payload;
    //   state.barData = [
    //     ...state.barData,
    //     { id: crypto.randomUUID(), value: expense, label: label, color: color },
    //   ];
    // },
    // resetBarChartData: (state) => {
    //   localStorage.removeItem("persist:barChart");
    //   state.barData = [];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(addExpense.pending, (state) => {
      // state.loading = true;
      // state.error = "";
    });
    builder.addCase(addExpense.fulfilled, (state, action) => {
      // state.loading = true;
      // state.barData = action.payload;
      // state.error = "";
    });
    builder.addCase(addExpense.rejected, (state, action) => {
      // state.loading = false;
      // state.error = action.error.message;
    });

    builder.addCase(getExpenses.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getExpenses.fulfilled, (state, action) => {
      state.loading = true;
      state.barData = action.payload;
      state.error = "";
    });
    builder.addCase(getExpenses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default barChartSlice.reducer;
