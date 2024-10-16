import React, { useState } from "react";
import { closeForm } from "../slices/entryFormSlice";
import { useDispatch } from "react-redux";
import { addIncome } from "../slices/doughnutChartSlice";
import { NewIncome } from "../utils/types/types";
import { addExpense } from "../slices/barChartSlice";

const EntryForm = ({ chart }) => {
  const [newIncomeInput, setNewIncomeInput] = useState<NewIncome>({
    income: 0,
    label: "",
    color: "#3e9c35",
  });
  const [newExpenseInput, setNewExpenseInput] = useState({
    expense: 0,
    label: "",
    color: "#3e9c35",
  });
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (chart === "Income") {
      setNewIncomeInput((prevState) => ({
        ...prevState,
        [name]: name === "income" ? Number(value) : value,
      }));
    } else if (chart === "Expense") {
      setNewExpenseInput((prevState) => ({
        ...prevState,
        [name]: name === "expense" ? Number(value) : value,
      }));
    }
  };

  const addNewEntry = () => {
    if (chart === "Income") {
      if (newIncomeInput.income > 0 && newIncomeInput.label !== "") {
        dispatch(addIncome(newIncomeInput));
      }
    } else if (chart === "Expense") {
      if (newExpenseInput.expense > 0 && newExpenseInput.label !== "") {
        dispatch(addExpense(newExpenseInput));
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[400px] p-[1.5rem] bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark shadow-md rounded-md text-text_color_light dark:text-text_color_dark">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Add {chart}</h2>
          <span
            className="material-symbols-rounded font-bold"
            onClick={() => dispatch(closeForm())}
          >
            close
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <label htmlFor={chart.toLowerCase()} className="font-semibold">
              {chart}:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name={chart.toLowerCase()}
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
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default EntryForm;
