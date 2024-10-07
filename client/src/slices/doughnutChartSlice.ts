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
    addIncome: (state, action) => {
      const { income, color } = action.payload;

      state.chartData = {
        ...state.chartData,
        datasets: [
          {
            ...state.chartData.datasets[0],
            data: [...state.chartData.datasets[0].data, income],
            backgroundColor: [
              ...state.chartData.datasets[0].backgroundColor,
              "blue",
            ],
          },
        ],
        labels: [...state.chartData.labels, color],
      };
    },
  },
});

export const { addIncome } = doughnutChartSlice.actions;
export default doughnutChartSlice.reducer;
