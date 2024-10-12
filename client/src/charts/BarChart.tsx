import React from "react";

const BarChart = () => {
  return (
    <div className="grid-item flex flex-col items-center justify-between relative">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-[600] self-start">Total Expenses</h3>
        <div className="flex items-center">
          <button>
            <span className="material-symbols-rounded text-green_color">
              add_circle
            </span>
          </button>
        </div>
      </div>
      <div className="w-52 h-52"></div>
      <div className="flex items-center justify-center"></div>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold"></p>
    </div>
  );
};

export default BarChart;
