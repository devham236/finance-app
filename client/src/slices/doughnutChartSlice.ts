import { createSlice } from "@reduxjs/toolkit";

const doughnutChartSlice = createSlice({
  name: "dougnutChart",
  initialState: {
    chartData: {
      totalIncome: 0,
      labels: <any>[],
      datasets: [
        {
          data: <any>[],
          backgroundColor: ["#3e9c35", "red"],
          hoverOffset: 4,
          borderWidth: 2,
          cutout: 80,
        },
      ],
    },
  },
  reducers: {
    calcTotalIncome: (state) => {
      state.chartData.totalIncome = state.chartData.datasets[0].data.reduce(
        (prev, curr) => {
          return prev + curr;
        },
        0
      );
    },
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

export const { calcTotalIncome, addIncome } = doughnutChartSlice.actions;
export default doughnutChartSlice.reducer;
