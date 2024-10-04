import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = () => {
  const data = {
    labels: ["Salary"],
    datasets: [
      {
        data: [2050],
        backgroundColor: ["#3e9c35"],
        hoverOffset: 4,
        borderWidth: 2,
        cutout: 80,
      },
    ],
  };

  const options = {};

  console.log(data.datasets[0].backgroundColor[0]);

  return (
    <>
      <h3 className="font-[600] self-start">Total Income</h3>
      <div className="w-56 h-56">
        <Doughnut data={data} options={options}></Doughnut>
      </div>
      <div className="flex items-center justify-center">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center mr-4">
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
    </>
  );
};

export default DoughnutChart;
