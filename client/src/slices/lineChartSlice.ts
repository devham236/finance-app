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
          data: [
            2050, 2050, 2050, 2050, 2050, 2050, 2050, 2050, 2050, 2050, 2050,
            2050,
          ],
          borderColor: "#3e9c35",
        },
        {
          label: "Expenses",
          data: [
            1556, 200, 20, 2011, 945, 1802, 56, 1234, 876, 2049, 567, 1490,
          ],
          borderColor: "red",
        },
      ],
    },
  },
  reducers: {},
});

export default lineChartSlice.reducer;
