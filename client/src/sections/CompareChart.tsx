import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getBoth } from "../redux/thunks/compareThunks";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip
);

const LineChart = () => {
  const { lineData } = useSelector((state: any) => state.compare);
  const { selectedMonth } = useSelector((state: any) => state.timePicker);
  const config = { maintainAspectRatio: false };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoth(selectedMonth));
  }, []);

  return (
    <section className="grid-item col-span-2">
      <div className="flex items-center justify-between">
        <h3 className="font-[600] self-start">Compare Income and Expenses</h3>
        <div className="flex items-center"></div>
      </div>
      <div className="w-full h-[calc(100%-32px)]">
        <Line options={config} data={lineData} />
      </div>
    </section>
  );
};

export default LineChart;
