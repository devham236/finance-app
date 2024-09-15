import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { currentPath: null },
  reducers: {
    setCurrentPath: (state, action) => {
      state.currentPath = action.payload;
    },
  },
});

export const { setCurrentPath } = sidebarSlice.actions;
export default sidebarSlice.reducer;
