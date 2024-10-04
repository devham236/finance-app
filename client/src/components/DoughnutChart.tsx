import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = () => {
  const data = {
    labels: ["Salary", "Sellings", "Donations"],
    datasets: [
      {
        label: "Total Income",
        data: [2050, 600, 50],
        backgroundColor: ["red", "blue", "green"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {};

  return (
    <>
      <h3 className="font-[600] self-start">Total Income</h3>
      <div className="w-56 h-56">
        <Doughnut data={data} options={options}></Doughnut>
      </div>
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
    </>
  );
};

export default DoughnutChart;
