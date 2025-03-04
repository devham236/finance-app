import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig.js";

export const addExpense = createAsyncThunk(
  "expenses/addExpense",
  async (expenseInput, { rejectWithValue }) => {
    try {
      const response = await axios.post("/expenses/add", { expenseInput });

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Failed to add expense, Please try again later.");
    }
  }
);

export const getExpenses = createAsyncThunk(
  "expenses/getExpenses",
  async ({ userId }) => {
    try {
      const { data } = await axios.get(`/expenses/get/${userId}`);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteAllExpenses = createAsyncThunk(
  "expenses/deleteAllExpenses",
  async (userId) => {
    try {
      const response = await axios.delete(`/expenses/deleteAll/${userId}`);
      console.log(response);
    } catch (error) {
      return error;
    }
  }
);
