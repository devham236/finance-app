import { createSlice } from "@reduxjs/toolkit";
import { getIncomes } from "../thunks/incomeThunks";
import { addIncome } from "../thunks/incomeThunks";

const doughnutChartSlice = createSlice({
  name: "dougnutChart",
  initialState: {
    loading: false,
    error: "",
    totalIncome: 0,
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
    // addIncome: (state, action: PayloadAction<NewIncome>) => {
    //   const { income, label, color } = action.payload;
    //   state.doughnutData = {
    //     ...state.doughnutData,
    //     datasets: [
    //       {
    //         ...state.doughnutData.datasets[0],
    //         data: [...state.doughnutData.datasets[0].data, income],
    //         backgroundColor: [
    //           ...state.doughnutData.datasets[0].backgroundColor,
    //           color,
    //         ],
    //       },
    //     ],
    //     labels: [...state.doughnutData.labels, label],
    //   };
    // },
    // resetChartData: (state) => {
    //   localStorage.removeItem("persist:doughnutChart");
    //   state.doughnutData = {
    //     ...state.doughnutData,
    //     labels: [],
    //     datasets: [
    //       {
    //         ...state.doughnutData.datasets[0],
    //         data: [],
    //         backgroundColor: [],
    //       },
    //     ],
    //   };
    // },
  },
  extraReducers: (builder) => {
    // Add Income
    builder.addCase(addIncome.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addIncome.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      console.log(action.payload);

      const { color, income, label } = action.payload;

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
      state.loading = true;
      state.error = "";
      const totalIncome = action.payload.data.reduce((prev, curr) => {
        return prev + curr.income;
      }, 0);
      state.totalIncome = totalIncome;
    });
    builder.addCase(getIncomes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default doughnutChartSlice.reducer;
