import { createSlice } from "@reduxjs/toolkit";

const editGoalSlice = createSlice({
  name: "editGoal",
  initialState: { editGoal: false, goal: null },
  reducers: {
    toggleEditGoalForm: (state, action) => {
      state.editGoal = !state.editGoal;
      state.goal = action.payload;
    },
    closeEditGoalForm: (state) => {
      state.editGoal = false;
    },
  },
});

export const { toggleEditGoalForm, closeEditGoalForm } = editGoalSlice.actions;
export default editGoalSlice.reducer;
