import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewIncome } from "../utils/types/types";

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
    addIncome: (state, action: PayloadAction<NewIncome>) => {
      const { income, label, color } = action.payload;

      state.chartData = {
        ...state.chartData,
        datasets: [
          {
            ...state.chartData.datasets[0],
            data: [...state.chartData.datasets[0].data, income],
            backgroundColor: [
              ...state.chartData.datasets[0].backgroundColor,
              color,
            ],
          },
        ],
        labels: [...state.chartData.labels, label],
      };
    },
  },
});

export const { addIncome } = doughnutChartSlice.actions;
export default doughnutChartSlice.reducer;
