import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addExpense = createAsyncThunk("expenses/addExpense", async () => {
  console.log("added expense");
  try {
    const data = await axios.post("http://localhost:8000/api/v1/expenses");
    console.log(data);
  } catch (error) {
    return error;
  }
});
