import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Goal } from "../utils/types/types";

const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    goalsData: [],
  },
  reducers: {
    addNewGoal: (state, action: PayloadAction<Goal>) => {
      console.log("added new goal to array");
    },
  },
});

export const { addNewGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
