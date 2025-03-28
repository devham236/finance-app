import { createSlice } from "@reduxjs/toolkit";
import {
  addExpense,
  deleteAllExpenses,
  getExpenses,
} from "../thunks/expenseThunks";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    barData: <any>[],
    totalExpenses: 0,
    expensesArray: <any>[],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add Expense
    builder.addCase(addExpense.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addExpense.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.barData.data = [...state.barData.data, action.payload];
      state.totalExpenses += action.payload.expense;
      state.expensesArray.push(action.payload);
    });
    builder.addCase(addExpense.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Get All Expenses
    builder.addCase(getExpenses.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getExpenses.fulfilled, (state, action) => {
      state.loading = true;
      state.barData = action.payload;
      state.error = "";
      state.expensesArray = action.payload.data;

      const totalValue = action.payload.data.reduce((prev, curr) => {
        return prev + curr.expense;
      }, 0);
      state.totalExpenses = totalValue;
    });
    builder.addCase(getExpenses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default expensesSlice.reducer;
