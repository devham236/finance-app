import React, { useState } from "react";
import { toggleIncomeForm } from "../slices/incomeFormSlice";
import { useDispatch } from "react-redux";
import { addIncome } from "../slices/doughnutChartSlice";

const IncomeForm = () => {
  const [newIncomeInput, setNewIncomeInput] = useState({
    income: 0,
    color: "#3e9c35",
  });
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewIncomeInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addNewIncome = () => {
    if (newIncomeInput.income > 0 && newIncomeInput.color !== "") {
      dispatch(addIncome(newIncomeInput));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[400px] p-[1.5rem] bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark shadow-md rounded-md text-text_color_light dark:text-text_color_dark">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Add Income</h2>
          <span
            className="material-symbols-rounded font-bold"
            onClick={() => dispatch(toggleIncomeForm())}
          >
            close
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="income" className="font-semibold">
              Income:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="income"
              placeholder="Number"
              className=" dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
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
              defaultValue={newIncomeInput.color}
              className="w-10 rounded-xl h-10 appearance-none outline-none border-none bg-transparent"
            />
          </div>
          <button
            onClick={addNewIncome}
            className="hover:shadow-md bg-green_color text-text_color_dark py-2 px-6 rounded-md duration-200"
          >
            Add
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default IncomeForm;
