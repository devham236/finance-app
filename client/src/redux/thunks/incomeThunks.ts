import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig.js";

export const addIncome = createAsyncThunk(
  "incomes/addIncome",
  async (incomeInput, { rejectWithValue }) => {
    try {
      const response = await axios.post("/incomes/add", { incomeInput });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Failed to add income, Please try again later.");
    }
  }
);

export const getIncomes = createAsyncThunk(
  "incomes/getIncomes",
  async ({ userId }) => {
    try {
      const { data } = await axios.get(`/incomes/get/${userId}`);
      return data;
    } catch (error) {
      return error;
    }
  }
);
