import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig.js";

export const addGoal = createAsyncThunk(
  "goals/addGoal",
  async (goalObject, { rejectWithValue }) => {
    try {
      const response = await axios.post("/goals/add", { goalObject });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Failed to add expense, Please try again later.");
    }
  }
);

export const getGoals = createAsyncThunk(
  "goals/getGoals",
  async (
    {
      userId,
      selectedMonth,
    }: {
      userId: number;
      selectedMonth: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.get(`/goals/get/${userId}`, {
        params: { selectedMonth },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Failed to fetch goals."
      );
    }
  }
);

export const deleteGoal = createAsyncThunk("goals/delete", async (id) => {
  try {
    const response = await axios.delete(`/goals/delete/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const updateAchieved = createAsyncThunk(
  "goals/updateAchieved",
  async ({ id, newValue }) => {
    try {
      const response = await axios.patch(`/goals/updateAchieved/${id}`, {
        newValue,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const updateTitleDesc = createAsyncThunk(
  "goals/updateTitleDesc",
  async ({ id, newTitle, newDesc }) => {
    try {
      const response = await axios.patch(`/goals/updateTitleDesc/${id}`, {
        newTitle,
        newDesc,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
