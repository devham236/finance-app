const Trends = () => {
  return (
    <div className="grid-item flex flex-col items-center justify-between">
      <h3 className="font-[600] self-start">Trends</h3>
      <div className="border-2 border-container_color_light dark:border-container_color_dark flex flex-col items-center px-5 py-9 rounded-md">
        <div className="flex items-center">
          <p className="text-2xl font-bold mr-2">25%</p>
          <div className="bg-green_color flex items-center justify-center w-7 h-7 rounded-full">
            <span className="material-symbols-rounded rounded-full text-xl font-bold text-item_color_light">
              arrow_upward
            </span>
          </div>
        </div>
        <p>compared to last month</p>
      </div>
      <p>some info</p>
    </div>
  );
};

export default Trends;
