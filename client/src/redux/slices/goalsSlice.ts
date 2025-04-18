import { createSlice, current } from "@reduxjs/toolkit";
import {
  addGoal,
  deleteGoal,
  getGoals,
  updateAchieved,
  updateTitleDesc,
} from "../thunks/goalThunks";

const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    goalsData: <any>[],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add Goal
    builder.addCase(addGoal.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addGoal.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";

      if (state.goalsData) {
        state.goalsData = [...state.goalsData, action.payload];
      } else {
        state.goalsData = [action.payload];
      }
    });
    builder.addCase(addGoal.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Get All Goals
    builder.addCase(getGoals.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getGoals.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.goalsData = action.payload;
    });
    builder.addCase(getGoals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Delete Goal
    builder.addCase(deleteGoal.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteGoal.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      if (action.payload._id) {
        const filteredArray = state.goalsData.filter(
          (g) => g._id != action.payload._id
        );
        state.goalsData = filteredArray;
      }
    });
    builder.addCase(deleteGoal.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Update Goal Achieved
    builder.addCase(updateAchieved.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateAchieved.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";

      const index = state.goalsData.findIndex(
        (goal) => goal._id === action.payload._id
      );

      state.goalsData[index] = {
        ...current(state.goalsData[index]),
        achieved: action.payload.achieved,
      };
    });
    builder.addCase(updateAchieved.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Update Goal Title Description
    builder.addCase(updateTitleDesc.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateTitleDesc.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";

      const index = state.goalsData.findIndex(
        (goal) => goal._id === action.payload._id
      );
      state.goalsData[index] = {
        ...current(state.goalsData[index]),
        title: action.payload.title,
        description: action.payload.description,
      };
    });
    builder.addCase(updateTitleDesc.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { toggleGoalStatus } = goalsSlice.actions;
export default goalsSlice.reducer;
