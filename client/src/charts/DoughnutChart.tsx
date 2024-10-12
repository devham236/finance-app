import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { resetTotalIncome, setTotalIncome } from "../slices/totalIncomeSlice";
import { toggleIncomeForm } from "../slices/incomeFormSlice";
import { resetChartData } from "../slices/doughnutChartSlice";
import { toggleAuthForm } from "../slices/authFormSlice";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = () => {
  const { chartData } = useSelector((state: any) => state.doughnutChart);
  const { incomeValue } = useSelector((state: any) => state.totalIncome);
  const { userData } = useSelector((state: any) => state.user);
  const config = {};
  const dispatch = useDispatch();

  const resetData = () => {
    dispatch(resetChartData());
    dispatch(resetTotalIncome());
  };

  const addData = () => {
    if (!userData || !userData.id) {
      dispatch(toggleAuthForm(true));
    } else {
      dispatch(toggleIncomeForm());
    }
  };

  useEffect(() => {
    if (
      chartData.datasets.length > 0 &&
      chartData.datasets[0].data.length > 0
    ) {
      const chartDataIncome = chartData.datasets[0].data.reduce(
        (prev: number, curr: number) => {
          return prev + curr;
        },
        0
      );
      dispatch(setTotalIncome(chartDataIncome));
    }
  }, [chartData.datasets, dispatch]);

  return (
    <div className="grid-item flex flex-col items-center justify-between relative">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-[600] self-start">Total Income</h3>
        <div className="flex items-center">
          {incomeValue > 0 && (
            <button className="mr-2" onClick={resetData}>
              <span className="material-symbols-rounded opacity-50 hover:opacity-100 duration-200">
                autorenew
              </span>
            </button>
          )}
          <button onClick={addData}>
            <span className="material-symbols-rounded text-green_color">
              add_circle
            </span>
          </button>
        </div>
      </div>
      <div className="w-52 h-52">
        <Doughnut data={chartData} options={config}></Doughnut>
      </div>
      <div className="flex items-center justify-center">
        {chartData.labels.map((label: string, index: number) => (
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
        {incomeValue}€
      </p>
    </div>
  );
};

export default DoughnutChart;
