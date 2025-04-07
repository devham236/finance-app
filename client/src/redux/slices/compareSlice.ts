import { createSlice } from "@reduxjs/toolkit";
import { getBoth } from "../thunks/compareThunks";
import { getMonthlySums } from "../../utils/helpers/methods";

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
          data: <any>[],
          borderColor: "#3e9c35",
        },
        {
          label: "Expenses",
          data: <any>[],
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

      const expenseResult = getMonthlySums(expenses, "expense");
      const incomeResult = getMonthlySums(income, "income");

      state.lineData = {
        ...state.lineData,
        datasets: [
          {
            ...state.lineData.datasets[0],
            data: incomeResult.data,
          },
          {
            ...state.lineData.datasets[1],
            data: expenseResult.data,
          },
        ],
      };
    });
    builder.addCase(getBoth.rejected, (state, action) => {});
  },
});

export default compareSlice.reducer;
