import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
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
  Tooltip,
  Legend
);

const LineChart = () => {
  const { chartData } = useSelector((state: any) => state.lineChart);
  const config = {};

  return (
    <div className="grid-item col-span-2">
      <Line options={config} data={chartData} />
    </div>
  );
};

export default LineChart;
