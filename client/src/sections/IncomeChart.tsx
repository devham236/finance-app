import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { toggleEntryForm } from "../redux/slices/newEntrySlice";
import { toggleAuthForm } from "../redux/slices/authFormSlice";
import { getIncomes } from "../redux/thunks/incomeThunks";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = () => {
  const { doughnutData, totalIncome } = useSelector(
    (state: any) => state.income
  );
  const { userData } = useSelector((state: any) => state.user);
  const { selectedMonth } = useSelector((state: any) => state.timePicker);
  const config = {};
  const dispatch = useDispatch();

  const addData = () => {
    if (!userData || !userData.id) {
      dispatch(toggleAuthForm(true));
    } else {
      dispatch(toggleEntryForm("Income"));
    }
  };

  useEffect(() => {
    dispatch(
      getIncomes({
        userId: userData.id,
        selectedMonth: selectedMonth ? selectedMonth : "Mar - 2025",
      })
    );
  }, [totalIncome, selectedMonth]);

  return (
    <section className="grid-item flex flex-col items-center justify-between relative">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-[600] self-start">Total Income</h3>
        <div className="flex items-center">
          <button className="mr-2">
            <span className="material-symbols-rounded opacity-50 hover:opacity-100 duration-200">
              autorenew
            </span>
          </button>
          <button onClick={addData}>
            <span className="material-symbols-rounded text-green_color">
              add_circle
            </span>
          </button>
        </div>
      </div>
      <div className="w-52 h-52 relative">
        <Doughnut data={doughnutData} options={config}></Doughnut>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
          {totalIncome}€
        </p>
      </div>
      <div className="flex items-center justify-center">
        {doughnutData.labels.map((label: string, index: number) => (
          <div key={index} className="flex items-center mr-4 last:mr-0">
            <span
              className="w-3 h-3 mr-1 rounded-full"
              style={{
                backgroundColor:
                  doughnutData.datasets[0].backgroundColor[index],
              }}
            ></span>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoughnutChart;
