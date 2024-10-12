import React, { useEffect } from "react";
import ExpenseBar from "../components/ExpenseBar";
import { useDispatch, useSelector } from "react-redux";
import { NewExpense } from "../utils/types/types";
import { setTotalExpenses } from "../slices/totalExpensesSlice";

const BarChart = () => {
  const { data } = useSelector((state: any) => state.barChart);
  const { totalExpenses } = useSelector((state: any) => state.totalExpenses);
  const dispatch = useDispatch();

  useEffect(() => {
    const expensesValue = data.reduce((prev, curr) => {
      return prev + curr.value;
    }, 0);
    dispatch(setTotalExpenses(expensesValue));
  }, [data, dispatch]);

  return (
    <div className="grid-item flex flex-col items-center justify-start relative">
      <div className="flex items-center justify-between w-full mb-2">
        <h3 className="font-[600] self-start">Total Expenses</h3>
        <div className="flex items-center">
          <button className="mr-2">
            <span className="material-symbols-rounded opacity-50 hover:opacity-100 duration-200">
              autorenew
            </span>
          </button>
          <button>
            <span className="material-symbols-rounded text-green_color">
              add_circle
            </span>
          </button>
        </div>
      </div>
      <p className="self-start text-2xl font-bold mb-4">{totalExpenses}€</p>
      <div className="flex flex-col items-center justify-start w-full h-full">
        {data.map((expense: NewExpense) => (
          <ExpenseBar expense={expense} key={expense.id} />
        ))}
      </div>
      <div className="flex items-center justify-center"></div>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold"></p>
    </div>
  );
};

export default BarChart;
