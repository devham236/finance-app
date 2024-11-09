import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig.js";

export const addExpense = createAsyncThunk(
  "expenses/addExpense",
  async (expense) => {
    try {
      const data = await axios.post("/expenses/add", expense);
      console.log(data);
    } catch (error) {
      return error;
    }
  }
);

export const getExpenses = createAsyncThunk(
  "expenses/getExpenses",
  async () => {
    try {
      const data = await axios.get("/expenses/get");
      console.log(data);
    } catch (error) {
      return error;
    }
  }
);
