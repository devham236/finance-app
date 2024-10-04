import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

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

  return <Doughnut data={data} options={options}></Doughnut>;
};

export default DoughnutChart;
