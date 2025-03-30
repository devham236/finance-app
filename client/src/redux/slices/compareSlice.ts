import { createSlice } from "@reduxjs/toolkit";

// get all incomes or total income and extract the month, when the entry was created

const compareSlice = createSlice({
  name: "compare",
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
          data: <any>[
            2050, 2050, 2050, 2050, 2050, 2250, 2250, 2250, 2250, 2250, 2250,
            2250,
          ],
          borderColor: "#3e9c35",
        },
        {
          label: "Expenses",
          data: <any>[
            1200, 1300, 1500, 1100, 1700, 1200, 1300, 1500, 1100, 1700, 1400,
            1600,
          ],
          borderColor: "#bf3232",
        },
      ],
    },
  },
  reducers: {
    addLinePoint: (state, action) => {
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

export const { addLinePoint } = compareSlice.actions;
export default compareSlice.reducer;
