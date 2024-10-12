import React from "react";

const ExpenseBar = () => {
  return (
    <div className="w-full mb-[14px]">
      <p className="mb-1">44% Rent</p>
      <div className="w-full h-[7px] bg-container_color_light dark:bg-container_color_dark rounded-full">
        <div className="w-[44%] h-full bg-green_color rounded-full"></div>
      </div>
    </div>
  );
};

export default ExpenseBar;
