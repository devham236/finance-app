import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewIncome } from "../utils/types/types";

const doughnutChartSlice = createSlice({
  name: "dougnutChart",
  initialState: {
    doughnutData: {
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

      state.doughnutData = {
        ...state.doughnutData,
        datasets: [
          {
            ...state.doughnutData.datasets[0],
            data: [...state.doughnutData.datasets[0].data, income],
            backgroundColor: [
              ...state.doughnutData.datasets[0].backgroundColor,
              color,
            ],
          },
        ],
        labels: [...state.doughnutData.labels, label],
      };
    },
    resetChartData: (state) => {
      localStorage.removeItem("persist:doughnutChart");

      state.doughnutData = {
        ...state.doughnutData,
        labels: [],
        datasets: [
          {
            ...state.doughnutData.datasets[0],
            data: [],
            backgroundColor: [],
          },
        ],
      };
    },
  },
});

export const { addIncome, resetChartData } = doughnutChartSlice.actions;
export default doughnutChartSlice.reducer;
