import { createSlice } from "@reduxjs/toolkit";

const authFormSlice = createSlice({
  name: "authForm",
  initialState: { showForm: false },
  reducers: {
    toggleAuthForm: (state, action) => {
      state.showForm = action.payload;
    },
  },
});

export const { toggleAuthForm } = authFormSlice.actions;
export default authFormSlice.reducer;
