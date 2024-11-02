import { createAsyncThunk } from "@reduxjs/toolkit";

export const addExpense = createAsyncThunk(
  "expenses/addExpense",
  async (expenseInput) => {
    const { label, expense, color } = expenseInput;
    console.log("added expense");
  }
);
