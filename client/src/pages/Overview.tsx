import React from "react";

const Overview = () => {
  return (
    <div className="text-text_color_light dark:text-text_color_dark w-full h-full  grid grid-rows-2 grid-cols-3 gap-[1.5rem]">
      <div className="w-full h-full bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark rounded-xl">
        Total Income
      </div>
      <div className="w-full h-full bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark rounded-xl">
        Total Spent
      </div>
      <div className="w-full h-full bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark rounded-xl">
        Unknown
      </div>
      <div className="w-full h-full bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark rounded-xl col-span-2">
        Compare Income and Spent Graphs
      </div>
      <div className="w-full h-full bg-sidebar_item_color_light dark:bg-sidebar_item_color_dark rounded-xl">
        Goals
      </div>
    </div>
  );
};

export default Overview;
