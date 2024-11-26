import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoalType } from "../utils/types/types";
import { addGoal, deleteGoal, getGoals } from "../thunks/goalThunks";

const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    goalsData: [] as GoalType[],
    loading: false,
    error: "",
  },
  reducers: {
    // addNewGoal: (state, action: PayloadAction<GoalType>) => {
    //   state.goalsData = [...state.goalsData, { ...action.payload }];
    // },
    // toggleGoalStatus: (state, action) => {
    //   const goal = state.goalsData.find((g) => g.id === action.payload);
    //   if (goal) {
    //     goal.achieved = !goal.achieved;
    //   }
    // },
    // deleteGoal: (state, action) => {
    //   const filteredArray = state.goalsData.filter(
    //     (g) => g.id !== action.payload
    //   );
    //   state.goalsData = filteredArray;
    // },
  },
  extraReducers: (builder) => {
    // Add Goal
    builder.addCase(addGoal.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addGoal.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      console.log(action.payload);
      state.goalsData.push(action.payload.data);
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
      state.goalsData = action.payload.data;
    });
    builder.addCase(getGoals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
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
        console.log("deleted goal");
        const filteredArray = state.goalsData.filter(
          (g) => g._id != action.payload._id
        );
        state.goalsData = filteredArray;
      }
    });
    builder.addCase(deleteGoal.rejected, (state) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { toggleGoalStatus } = goalsSlice.actions;
export default goalsSlice.reducer;
