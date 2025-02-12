import DoughnutChart from "../sections/DoughnutChart";
import BarChart from "../sections/BarChart";
import CompareChart from "../sections/CompareChart";
import Goals from "../sections/Goals";
import Trends from "../sections/Trends";

const Overview = () => {
  return (
    <div className="text-text_color_light dark:text-text_color_dark w-full h-full  grid grid-rows-2 grid-cols-3 gap-[1.5rem]">
      <DoughnutChart />
      <BarChart />
      <Trends />
      <CompareChart />
      <Goals />
    </div>
  );
};

export default Overview;
