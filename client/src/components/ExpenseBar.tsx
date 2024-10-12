import React from "react";
import { NewExpense } from "../utils/types/types";
import { calcExpensePercentage } from "../utils/helpers/methods.ts";

const ExpenseBar = ({ expense }) => {
  console.log(calcExpensePercentage(30, 150));

  return (
    <div className="w-full mb-[14px]">
      <p className="mb-1">44% {expense.label}</p>
      <div className="w-full h-[7px] bg-container_color_light dark:bg-container_color_dark rounded-full">
        <div
          className={`w-[44%] h-full bg-[${expense.color}] rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default ExpenseBar;
