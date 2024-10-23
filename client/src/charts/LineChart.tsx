import { Chart as ChartJS, LineElement, Tooltip } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, Tooltip);

const LineChart = () => {
  return <div className="grid-item col-span-2"></div>;
};

export default LineChart;
