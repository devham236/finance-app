import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig.js";

export const addGoal = createAsyncThunk(
  "goals/addGoal",
  async (goalObject, { rejectWithValue }) => {
    try {
      const response = await axios.post("/goals/add", { goalObject });
      return response;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Failed to add expense, Please try again later.");
    }
  }
);

export const getGoals = createAsyncThunk("goals/getGoals", async () => {
  try {
    const { data } = await axios.get("/goals/get");
    return data;
  } catch (error) {
    return error;
  }
});

export const deleteGoal = createAsyncThunk("goals/delete", async (id) => {
  try {
    const response = await axios.delete(`/goals/delete/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
});
