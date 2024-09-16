import { createSlice } from "@reduxjs/toolkit";

const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState: { isDarkMode: false },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
