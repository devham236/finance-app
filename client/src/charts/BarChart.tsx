import React, { useEffect } from "react";
import ExpenseBar from "../components/ExpenseBar";
import { useDispatch, useSelector } from "react-redux";
import { NewExpense } from "../utils/types/types";
import { setTotalExpenses } from "../slices/totalExpensesSlice";
import { toggleAuthForm } from "../slices/authFormSlice";
import { toggleEntryForm } from "../slices/entryFormSlice";
import { addExpense, getExpenses } from "../utils/thunks/expenseThunks";

const BarChart = () => {
  const { barData } = useSelector((state: any) => state.barChart);
  const { userData } = useSelector((state: any) => state.user);
  const { totalExpenses } = useSelector((state: any) => state.totalExpenses);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const expensesValue = barData.reduce((prev, curr) => {
  //     return prev + curr.value;
  //   }, 0);
  //   dispatch(setTotalExpenses(expensesValue));
  // }, [barData, dispatch]);

  useEffect(() => {
    dispatch(getExpenses());
  }, []);

  const addData = () => {
    if (!userData || !userData.id) {
      dispatch(toggleAuthForm(true));
    } else {
      dispatch(toggleEntryForm("Expense"));
    }
  };

  return (
    <div className="grid-item flex flex-col items-center justify-start relative">
      <div className="flex items-center justify-between w-full mb-2">
        <h3 className="font-[600] self-start">Total Expenses</h3>
        <div className="flex items-center">
          {totalExpenses > 0 && (
            <button
              // onClick={() => dispatch(resetBarChartData())}
              className="mr-2"
            >
              <span className="material-symbols-rounded opacity-50 hover:opacity-100 duration-200">
                autorenew
              </span>
            </button>
          )}
          <button onClick={addData}>
            <span className="material-symbols-rounded text-green_color">
              add_circle
            </span>
          </button>
        </div>
      </div>
      <p className="self-start text-2xl font-bold mb-4">{totalExpenses}€</p>
      {/* <div className="flex flex-col items-center justify-start w-full h-full">
        {barData.map((expense: NewExpense) => (
          <ExpenseBar expense={expense} key={expense.id} />
        ))}
      </div> */}
      <div className="flex items-center justify-center"></div>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold"></p>
    </div>
  );
};

export default BarChart;
