import { createSlice } from "@reduxjs/toolkit";
import { getBoth } from "../thunks/compareThunks";

// get all incomes or total income and extract the month, when the entry was created
// do the same for expenses

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
          data: <any>[2050, 2050, 2050],
          borderColor: "#3e9c35",
        },
        {
          label: "Expenses",
          data: <any>[1200, 1300, 1500],
          borderColor: "#bf3232",
        },
      ],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBoth.pending, (state, action) => {});
    builder.addCase(getBoth.fulfilled, (state, action) => {
      const { expenses, income } = action.payload;
      console.log(action.payload);

      const totalExpenses = expenses.reduce((acc, prev) => {
        return acc + prev.expense;
      }, 0);
      const totalIncome = income.reduce((acc, prev) => {
        return acc + prev.income;
      }, 0);

      state.lineData = {
        ...state.lineData,
        datasets: [
          {
            ...state.lineData.datasets[0],
            data: [...state.lineData.datasets[0].data, totalIncome],
          },
          {
            ...state.lineData.datasets[1],
            data: [...state.lineData.datasets[1].data, totalExpenses],
          },
        ],
      };
    });
    builder.addCase(getBoth.rejected, (state, action) => {});
  },
});

export default compareSlice.reducer;
