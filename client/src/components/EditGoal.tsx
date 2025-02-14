import React from "react";

const EditGoal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[400px] p-[1.5rem] bg-item_color_light dark:bg-item_color_dark shadow-md rounded-md text-text_color_light dark:text-text_color_dark">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Edit Goal</h2>
          <span className="material-symbols-rounded font-bold cursor-pointer">
            close
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <label htmlFor="newTitle" className="font-semibold mb-2">
              New Title:
            </label>
            <input
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
              type="text"
              name="newDescription"
              placeholder="Description..."
              className=" dark:border-container_color_dark bg-transparent border-container_color_light border-2 rounded-md p-2 placeholder:text-container_color_light dark:placeholder:text-container_color_dark outline-none"
            />
          </div>
          <button className="hover:shadow-md bg-green_color text-text_color_dark py-2 px-6 rounded-md duration-200">
            Update
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default EditGoal;
