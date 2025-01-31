import { useDispatch } from "react-redux";
import { deleteGoal, updateAchieved } from "../redux/thunks/goalThunks";
import { GoalPropsType } from "../utils/types/types";

const Goal = ({ goal }: GoalPropsType) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex items-center justify-between p-2 mb-2 last:mb-0 rounded-md cursor-pointer border-2 border-container_color_light dark:border-container_color_dark">
      <div className="flex flex-col">
        <div className="flex items-center">
          <input
            onChange={() =>
              dispatch(
                updateAchieved({ id: goal?._id, newValue: !goal.achieved })
              )
            }
            type="checkbox"
            name="goal"
            id=""
            checked={goal?.achieved}
            className="appearance-none mr-3 w-4 h-4 rounded-full border-2 border-green_color checked:bg-green_color goal-checkbox relative cursor-pointer"
          />
          <p className="text-[1rem] font-[600]">{goal?.title}</p>
        </div>
        <p>{goal?.description}</p>
      </div>
      <span
        onClick={() => dispatch(deleteGoal(goal._id))}
        className="material-symbols-rounded opacity-50 hover:opacity-100 duration-200"
      >
        delete
      </span>
    </div>
  );
};

export default Goal;
