import { createSlice } from "@reduxjs/toolkit";

const lineChartSlice = createSlice({
  name: "lineChart",
  initialState: {
    lineData: {
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
          data: <any>[2050, 2050],
          borderColor: "#3e9c35",
        },
        {
          label: "Expenses",
          data: <any>[1500, 1500, 500],
          borderColor: "red",
        },
      ],
    },
  },
  reducers: {
    addLinePoint: (state, action) => {
      console.log(action.payload);
      const { expenses, incomes } = action.payload;
      const reducedExpenses = expenses.reduce((curr, prev) => {
        return prev + curr;
      }, 0);
      const reducedIncomes = incomes.reduce((curr, prev) => {
        return prev + curr;
      }, 0);

      state.lineData = {
        ...state.lineData,
        datasets: [
          {
            ...state.lineData.datasets[0],
            data: [...state.lineData.datasets[0].data, reducedIncomes],
          },
          {
            ...state.lineData.datasets[1],
            data: [...state.lineData.datasets[1].data, reducedExpenses],
          },
        ],
      };
    },
  },
});

export const { addLinePoint } = lineChartSlice.actions;
export default lineChartSlice.reducer;
