import React from "react";

const ExpenseBar = () => {
  return (
    <div className="w-full mb-4">
      <p className="mb-1">44% Rent</p>
      <div className="w-full h-[10px] bg-container_color_light dark:bg-container_color_dark rounded-full">
        <div className="w-[44%] h-full bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default ExpenseBar;
