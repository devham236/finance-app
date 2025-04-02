import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig.js";

export const getBoth = createAsyncThunk(
  "/compare/getBoth",
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
      const { data } = await axios.get(`/both/get/${userId}`, {
        params: { selectedMonth },
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Failed to fetch expenses."
      );
    }
  }
);
