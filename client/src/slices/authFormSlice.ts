import { createSlice } from "@reduxjs/toolkit";

const authFormSlice = createSlice({
  name: "authForm",
  initialState: { showForm: false },
  reducers: {
    toggleForm: (state, action) => {
      state.showForm = action.payload;
    },
  },
});

export const { toggleForm } = authFormSlice.actions;
export default authFormSlice.reducer;
