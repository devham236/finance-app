import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoalType } from "../utils/types/types";

const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    goalsData: [] as GoalType[],
  },
  reducers: {
    addNewGoal: (state, action: PayloadAction<GoalType>) => {
      state.goalsData = [
        ...state.goalsData,
        { ...action.payload, id: crypto.randomUUID() },
      ];
    },
    toggleGoalStatus: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
    },
  },
});

export const { addNewGoal, toggleGoalStatus } = goalsSlice.actions;
export default goalsSlice.reducer;
