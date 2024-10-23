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
        <h3 className="font-[600] self-start">Compare Income and Expenses</h3>
        <div className="flex items-center">
          {chartData.datasets.map((dataset, index) => (
            <div key={index} className="flex items-center mr-4 last:mr-0 mb-2">
              <span
                style={{
                  backgroundColor: dataset.borderColor,
                }}
                className="w-3 h-3 mr-1 rounded-full"
              ></span>
              <p>{dataset.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[calc(100%-32px)]">
        <Line options={config} data={chartData} />
      </div>
    </div>
  );
};

export default LineChart;
