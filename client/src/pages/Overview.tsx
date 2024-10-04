import React from "react";

const Overview = () => {
  return (
    <div className="text-text_color_light dark:text-text_color_dark w-full h-full  grid grid-rows-2 grid-cols-3 gap-[1.5rem]">
      <div className="grid-item p-[1.5rem] flex flex-col items-center justify-between">
        <h3 className="font-[600] self-start">Total Income</h3>
        <div className="w-56 h-56 rounded-full bg-red-400"></div>
        <div className="flex items-center justify-center">
          <div className="flex items-center mr-4">
            <span>dot</span>
            <p> category</p>
          </div>
          <div className="flex items-center mr-4">
            <span>dot</span>
            <p> category</p>
          </div>
          <div className="flex items-center">
            <span>dot</span>
            <p> category</p>
          </div>
        </div>
      </div>
      <div className="grid-item">Total Spent</div>
      <div className="grid-item">Unknown</div>
      <div className="grid-item col-span-2">
        Compare Income and Spent Graphs
      </div>
      <div className="grid-item">Goals</div>
    </div>
  );
};

export default Overview;
