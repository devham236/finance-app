import { createSlice } from "@reduxjs/toolkit";

const authFormSlice = createSlice({
  name: "authForm",
  initialState: { showForm: false },
  reducers: {
    toggleForm: (state) => {
      state.showForm = !state.showForm;
    },
  },
});

export const { toggleForm } = authFormSlice.actions;
export default authFormSlice.reducer;
