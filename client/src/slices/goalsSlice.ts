import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoalType } from "../utils/types/types";

const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    goalsData: <any>[],
  },
  reducers: {
    addNewGoal: (state, action: PayloadAction<GoalType>) => {
      state.goalsData = [...state.goalsData, action.payload];
    },
  },
});

export const { addNewGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
