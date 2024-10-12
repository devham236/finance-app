import React from "react";

const BarChart = () => {
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
      <p className="self-start text-2xl font-bold mb-8">1500€</p>
      <div className="flex flex-col w-full max-h-full overflow-scroll">
        <div className="w-full mb-4">
          <p className="mb-1">44% Rent</p>
          <div className="w-full h-[10px] bg-container_color_light dark:bg-container_color_dark rounded-full">
            <div className="w-[44%] h-full bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center"></div>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold"></p>
    </div>
  );
};

export default BarChart;
