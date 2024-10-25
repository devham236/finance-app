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
    toggleGoalStatus: (state, action) => {
      const goal = state.goalsData.find((g) => g.id === action.payload);
      if (goal) {
        goal.achieved = !goal.achieved;
      }
    },
    deleteGoal: (state, action) => {
      const filteredArray = state.goalsData.filter(
        (g) => g.id !== action.payload
      );
      state.goalsData = filteredArray;
    },
  },
});

export const { addNewGoal, toggleGoalStatus, deleteGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
