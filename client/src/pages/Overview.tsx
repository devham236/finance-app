import React from "react";
import DoughnutChart from "../charts/DoughnutChart";
import BarChart from "../charts/BarChart";

const Overview = () => {
  return (
    <div className="text-text_color_light dark:text-text_color_dark w-full h-full  grid grid-rows-2 grid-cols-3 gap-[1.5rem]">
      <DoughnutChart />
      <BarChart />
      <div className="grid-item">Trends</div>
      <div className="grid-item col-span-2">
        Compare Income and Spent Graphs
      </div>
      <div className="grid-item">Goals</div>
    </div>
  );
};

export default Overview;
