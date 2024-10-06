import { createSlice } from "@reduxjs/toolkit";

const doughnutChartSlice = createSlice({
  name: "dougnutChart",
  initialState: {
    chartData: {
      labels: <any>[],
      datasets: [
        {
          data: <any>[],
          backgroundColor: <any>[],
          hoverOffset: 4,
          borderWidth: 2,
          cutout: 80,
        },
      ],
    },
  },
  reducers: {
    addIncome: (state) => {
      state.chartData = {
        ...state.chartData,
        datasets: [
          {
            ...state.chartData.datasets[0],
            data: [...state.chartData.datasets[0].data, 100],
            backgroundColor: [
              ...state.chartData.datasets[0].backgroundColor,
              "blue",
            ],
          },
        ],
        labels: [...state.chartData.labels, "New Label"],
      };
    },
  },
});

export const { addIncome } = doughnutChartSlice.actions;
export default doughnutChartSlice.reducer;
