import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBoth = createAsyncThunk(
  "/compare/getBoth",
  async (currentMonth) => {
    console.log(currentMonth);
  }
);
