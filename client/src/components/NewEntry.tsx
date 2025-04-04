import React, { useState } from "react";
import { closeForm } from "../redux/slices/newEntrySlice";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../redux/thunks/expenseThunks";
import { addGoal } from "../redux/thunks/goalThunks";
import { addIncome } from "../redux/thunks/incomeThunks";

const NewEntry = ({ entry }: { entry: string }) => {
  const [formData, setFormData] = useState(() => getInitialState(entry));
  const { userData } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  function getInitialState(entryType: string) {
    switch (entryType) {
      case "Income":
        return { income: 0, label: "", color: "#3e9c35" };
      case "Expense":
        return { expense: 0, label: "", color: "#3e9c35" };
      case "Goal":
        return { title: "", description: "", achieved: false };
      default:
        return {};
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const addNewEntry = () => {
    if (entry === "Income" && formData.income > 0 && formData.label) {
      dispatch(addIncome({ ...formData, userId: userData.id }));
    } else if (entry === "Expense" && formData.expense > 0 && formData.label) {
      dispatch(addExpense({ ...formData, id: userData.id }));
    } else if (entry === "Goal" && formData.title) {
      dispatch(addGoal({ ...formData, id: userData.id }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[400px] p-[1.5rem] bg-item_color_light dark:bg-item_color_dark shadow-md rounded-md text-text_color_light dark:text-text_color_dark">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <h2 className="text-xl font-bold mr-2">Add {entry}</h2>
            <span className="material-symbols-rounded font-bold text-green_color">
              {entry === "Income"
                ? "money_bag"
                : entry === "Expense"
                ? "paid"
                : "check_circle"}
            </span>
          </div>
          <span
            className="material-symbols-rounded font-bold cursor-pointer"
            onClick={() => dispatch(closeForm())}
          >
            close
          </span>
        </div>
        <div className="flex flex-col">
          {entry === "Goal" ? (
            <>
              <div className="flex flex-col mb-4">
                <label htmlFor="goalTitle" className="font-semibold mb-2">
                  Title:
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="title"
                  placeholder="Title..."
                  className=" dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="goalDescription" className="font-semibold mb-2">
                  Description:
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="description"
                  placeholder="Description..."
                  className=" dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
                />
              </div>
              <button
                onClick={addNewEntry}
                className="hover:shadow-md bg-green_color text-text_color_dark py-2 px-6 rounded-md duration-200"
              >
                Add
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <label htmlFor={entry.toLowerCase()} className="font-semibold">
                  {entry}:
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="number"
                  name={entry.toLowerCase()}
                  placeholder="Number"
                  className=" dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <label htmlFor="label" className="font-semibold">
                  Label:
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="label"
                  placeholder="Label"
                  className="dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
                />
              </div>
              <div className="flex items-center justify-between mb-8">
                <label htmlFor="color" className="font-semibold">
                  Color:
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="color"
                  name="color"
                  defaultValue="#3e9c35"
                  className="w-10 rounded-xl h-10 appearance-none outline-none border-none bg-transparent"
                />
              </div>
              <button
                onClick={addNewEntry}
                className="hover:shadow-md bg-green_color text-text_color_dark py-2 px-6 rounded-md duration-200"
              >
                Add
              </button>
            </>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NewEntry;
