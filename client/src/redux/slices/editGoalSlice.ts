import { createSlice } from "@reduxjs/toolkit";

const editGoalSlice = createSlice({
  name: "editGoal",
  initialState: { editGoal: false, goal: null },
  reducers: {
    toggleGoalForm: (state, action) => {
      state.editGoal = !state.editGoal;
      state.goal = action.payload;
    },
    closeForm: (state) => {
      state.editGoal = false;
    },
  },
});

export const { toggleGoalForm, closeForm } = editGoalSlice.actions;
export default editGoalSlice.reducer;
