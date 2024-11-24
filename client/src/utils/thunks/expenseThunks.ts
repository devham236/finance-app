import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig.js";

export const addExpense = createAsyncThunk(
  "expenses/addExpense",
  async (expenseInput, { rejectWithValue }) => {
    try {
      const response = await axios.post("/expenses/add", { expenseInput });
      console.log(response);

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
  async () => {
    try {
      const { data } = await axios.get("/expenses/get");
      return data;
    } catch (error) {
      return error;
    }
  }
);
