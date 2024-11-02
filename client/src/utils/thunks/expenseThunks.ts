import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig.js";

export const addExpense = createAsyncThunk("expenses/addExpense", async () => {
  console.log("added expense");
  try {
    const data = await axios.post("/expenses");
    console.log(data);
  } catch (error) {
    return error;
  }
});
