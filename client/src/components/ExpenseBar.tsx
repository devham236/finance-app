import React from "react";
import { NewExpense } from "../utils/types/types";
import { calcExpensePercentage } from "../utils/helpers/methods.ts";
import { useSelector } from "react-redux";

const ExpenseBar = ({ expense }) => {
  const { totalExpenses } = useSelector((state: any) => state.totalExpenses);

  return (
    <div className="w-full mb-[14px]">
      <p className="mb-1">
        {calcExpensePercentage(expense.value, totalExpenses)}% {expense.label}
      </p>
      <div className="w-full h-[7px] bg-container_color_light dark:bg-container_color_dark rounded-full">
        <div
          className={`w-[${calcExpensePercentage(
            expense.value,
            totalExpenses
          )}%] h-full bg-[${expense.color}] rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default ExpenseBar;
