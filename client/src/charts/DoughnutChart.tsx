import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { calcTotalIncome } from "../slices/doughnutChartSlice";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = () => {
  const { totalIncome } = useSelector((state: any) => state.totalIncome);
  const [chartData, setChartData] = useState({
    labels: ["Salary", "Sellings"],
    datasets: [
      {
        data: [2050, 420],
        backgroundColor: ["#3e9c35", "red"],
        hoverOffset: 4,
        borderWidth: 2,
        cutout: 80,
      },
    ],
  });
  const dispatch = useDispatch();

  const config = {};

  const addIncome = () => {
    setChartData((prevState) => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0],
          data: [...prevState.datasets[0].data, 100],
          backgroundColor: [...prevState.datasets[0].backgroundColor, "blue"],
        },
      ],
      labels: [...prevState.labels, "New Label"],
    }));
  };

  useEffect(() => {
    dispatch(calcTotalIncome(chartData.datasets[0].data));
  }, [chartData.datasets, dispatch]);

  return (
    <div className="grid-item flex flex-col items-center justify-between relative">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-[600] self-start">Total Income</h3>
        <button className="" onClick={() => addIncome()}>
          <span className="material-symbols-rounded text-green_color">
            add_circle
          </span>
        </button>
      </div>
      <div className="w-56 h-56">
        <Doughnut data={chartData} options={config}></Doughnut>
      </div>
      <div className="flex items-center justify-center">
        {chartData.labels.map((label, index) => (
          <div key={index} className="flex items-center mr-4 last:mr-0">
            <span
              className="w-3 h-3 mr-2 rounded-full"
              style={{
                backgroundColor: chartData.datasets[0].backgroundColor[index],
              }}
            ></span>
            <p>{label}</p>
          </div>
        ))}
      </div>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
        {totalIncome}€
      </p>
    </div>
  );
};

export default DoughnutChart;
