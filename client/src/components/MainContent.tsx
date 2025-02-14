import { Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Settings from "../pages/Settings";
import { useSelector } from "react-redux";
import NewEntry from "./NewEntry";
import EditGoal from "./EditGoal";

const MainContent = () => {
  const { isOpen, entry } = useSelector((state: any) => state.newEntry);
  const { editGoal, goal } = useSelector((state: any) => state.editGoal);

  return (
    <div className="w-full h-full flex items-center justify-center text-text_color_light p-[1.5rem]">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {isOpen && <NewEntry entry={entry} />}
      {editGoal && <EditGoal goal={goal} />}
    </div>
  );
};

export default MainContent;
