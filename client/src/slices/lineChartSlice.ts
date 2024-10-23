import { createSlice } from "@reduxjs/toolkit";

const lineChartSlice = createSlice({
  name: "lineChart",
  initialState: {
    chartData: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Income",
          data: [],
          borderColor: "#3e9c35",
        },
        {
          label: "Expenses",
          data: [],
          borderColor: "red",
        },
      ],
    },
  },
  reducers: {
    addLinePoint: (state, action) => {
      console.log("added linepoint");
    },
  },
});

export const { addLinePoint } = lineChartSlice.actions;
export default lineChartSlice.reducer;
