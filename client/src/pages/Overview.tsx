import IncomeChart from "../sections/IncomeChart";
import BarChart from "../sections/BarChart";
import CompareChart from "../sections/CompareChart";
import Goals from "../sections/Goals";
import Trends from "../sections/Trends";

const Overview = () => {
  return (
    <div className="text-text_color_light dark:text-text_color_dark w-full h-full  grid grid-rows-2 grid-cols-3 gap-[1.5rem]">
      <IncomeChart />
      <BarChart />
      <Trends />
      <CompareChart />
      <Goals />
    </div>
  );
};

export default Overview;
