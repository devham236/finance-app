import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { addLinePoint } from "../slices/lineChartSlice";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip
);

const LineChart = () => {
  const { lineData } = useSelector((state: any) => state.lineChart);
  const { barData } = useSelector((state: any) => state.expenses);
  const { doughnutData } = useSelector((state: any) => state.income);
  const dispatch = useDispatch();
  const config = { maintainAspectRatio: false };

  useEffect(() => {
    // const filteredBarData = barData.map((bar) => bar.value);
    // dispatch(
    //   addLinePoint({
    //     incomes: [...doughnutData.datasets[0].data],
    //     expenses: [...filteredBarData],
    //   })
    // );
  }, [doughnutData.datasets, barData]);

  return (
    <div className="grid-item col-span-2">
      <div className="flex items-center justify-between">
        <h3 className="font-[600] self-start">Compare Income and Expenses</h3>
        <div className="flex items-center">
          {/* {lineData.datasets.map((dataset, index) => (
            <div key={index} className="flex items-center mr-4 last:mr-0 mb-2">
              <span
                style={{
                  backgroundColor: dataset.borderColor,
                }}
                className="w-3 h-3 mr-1 rounded-full"
              ></span>
              <p>{dataset.label}</p>
            </div>
          ))} */}
        </div>
      </div>
      <div className="w-full h-[calc(100%-32px)]">
        <Line options={config} data={lineData} />
      </div>
    </div>
  );
};

export default LineChart;
