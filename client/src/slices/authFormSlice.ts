import { createSlice } from "@reduxjs/toolkit";

const authFormSlice = createSlice({
  name: "authForm",
  initialState: { showForm: false },
  reducers: {
    toggleForm: (state, action) => {
      console.log(action.payload);

      state.showForm = action.payload;
    },
  },
});

export const { toggleForm } = authFormSlice.actions;
export default authFormSlice.reducer;
