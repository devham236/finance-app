import React, { useEffect, useState } from "react";
import { closeEditGoalForm } from "../redux/slices/editGoalSlice";
import { useDispatch } from "react-redux";
import { updateTitleDesc } from "../redux/thunks/goalThunks";
import { GoalType } from "../utils/types/types";

const EditGoal = ({ goal }: { goal: GoalType }) => {
  const [newGoalInput, setNewGoalInput] = useState({
    newTitle: "",
    newDescription: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewGoalInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[400px] p-[1.5rem] bg-item_color_light dark:bg-item_color_dark shadow-md rounded-md text-text_color_light dark:text-text_color_dark">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <h2 className="text-xl font-bold mr-2">Edit Goal</h2>
            <span className="material-symbols-rounded font-bold text-green_color">
              edit
            </span>
          </div>
          <span
            onClick={() => dispatch(closeEditGoalForm())}
            className="material-symbols-rounded font-bold cursor-pointer"
          >
            close
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <label htmlFor="newTitle" className="font-semibold mb-2">
              New Title:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="newTitle"
              placeholder="Title..."
              className=" dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="newDescription" className="font-semibold mb-2">
              New Description:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="newDescription"
              placeholder="Description..."
              className=" dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
            />
          </div>
          <button
            onClick={() =>
              dispatch(
                updateTitleDesc({
                  id: goal._id,
                  newTitle: newGoalInput.newTitle,
                  newDesc: newGoalInput.newDescription,
                })
              )
            }
            className="hover:shadow-md bg-green_color text-text_color_dark py-2 px-6 rounded-md duration-200"
          >
            Update
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default EditGoal;
