import React, { useEffect, useState } from "react";
import { calcExpensePercentage } from "../utils/helpers/methods.ts";
import { useSelector } from "react-redux";

const ExpenseBar = ({ expense }) => {
  const { totalExpenses } = useSelector((state: any) => state.expenses);
  const [expensePercentage, setExpensePercentage] = useState<string>();

  useEffect(() => {
    const percentage = calcExpensePercentage(expense.expense, totalExpenses);
    setExpensePercentage(percentage);
  }, [totalExpenses]);

  return (
    <div className="w-full mb-4">
      <div className="w-full flex items-center justify-between">
        <p className="mb-1">
          {expensePercentage}% {expense.label}
        </p>
        <p className=" text-container_color_light dark:text-container_color_dark hover:text-text_color_light dark:hover:text-text_color_dark">
          {expense.expense}€
        </p>
      </div>
      <div className="w-full h-[7px] bg-container_color_light dark:bg-container_color_dark rounded-full">
        <div
          style={{
            width: `${expensePercentage}%`,
            backgroundColor: `${expense.color}`,
          }}
          className={`h-full rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default ExpenseBar;
