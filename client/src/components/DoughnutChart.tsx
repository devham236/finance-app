import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { calcTotalIncome } from "../slices/totalIncomeSlice";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = () => {
  const { totalIncome } = useSelector((state: any) => state.totalIncome);
  const dispatch = useDispatch();

  const data = {
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
  };

  const config = {};

  useEffect(() => {
    dispatch(calcTotalIncome(data.datasets[0].data));
  }, [data.datasets]);

  return (
    <div className="grid-item p-[1.5rem] flex flex-col items-center justify-between relative">
      <h3 className="font-[600] self-start">Total Income</h3>
      <div className="w-56 h-56">
        <Doughnut data={data} options={config}></Doughnut>
      </div>
      <div className="flex items-center justify-center">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center mr-4 last:mr-0">
            <span
              className="w-3 h-3 mr-2 rounded-full"
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            ></span>
            <p>{label}</p>
          </div>
        ))}
      </div>
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {totalIncome}
      </p>
    </div>
  );
};

export default DoughnutChart;
