import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip
);

const LineChart = () => {
  const { chartData } = useSelector((state: any) => state.lineChart);
  const config = { maintainAspectRatio: false };

  return (
    <div className="grid-item col-span-2">
      <div className="flex items-center justify-between">
        <h3 className="font-[600] self-start">Total Income</h3>
        <div className="flex items-center"></div>
      </div>
      <Line options={config} data={chartData} />
    </div>
  );
};

export default LineChart;
