import { createSlice } from "@reduxjs/toolkit";
import { getIncomes } from "../thunks/incomeThunks";
import { addIncome } from "../thunks/incomeThunks";

const incomeSlice = createSlice({
  name: "income",
  initialState: {
    loading: false,
    error: "",
    totalIncome: 0,
    incomeArray: <any>[],
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
  reducers: {},
  extraReducers: (builder) => {
    // Add Income
    builder.addCase(addIncome.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addIncome.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";

      const { color, income, label } = action.payload;

      state.incomeArray.push(action.payload);

      state.totalIncome += income;

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
    });
    builder.addCase(addIncome.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Get All Incomes
    builder.addCase(getIncomes.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getIncomes.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.incomeArray = action.payload;

      const totalIncome = action.payload.reduce((prev, curr) => {
        return prev + curr.income;
      }, 0);
      state.totalIncome = totalIncome;

      const allIncomes: number[] = [];
      const allColors: string[] = [];
      const allLabels: string[] = [];

      action.payload.forEach(({ income, color, label }) => {
        allIncomes.push(income);
        allColors.push(color);
        allLabels.push(label);
      });

      state.doughnutData = {
        ...state.doughnutData,
        datasets: [
          {
            ...state.doughnutData.datasets[0],
            data: allIncomes,
            backgroundColor: allColors,
          },
        ],
        labels: allLabels,
      };
    });
    builder.addCase(getIncomes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default incomeSlice.reducer;
