import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
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
  const { lineData } = useSelector((state: any) => state.lineChart);
  const config = { maintainAspectRatio: false };

  return (
    <div className="grid-item col-span-2">
      <div className="flex items-center justify-between">
        <h3 className="font-[600] self-start">Compare Income and Expenses</h3>
        <div className="flex items-center"></div>
      </div>
      <div className="w-full h-[calc(100%-32px)]">
        <Line options={config} data={lineData} />
      </div>
    </div>
  );
};

export default LineChart;
