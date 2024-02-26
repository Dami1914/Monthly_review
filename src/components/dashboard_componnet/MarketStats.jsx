import DashboardBarChart from "./charts/DashboardBarChart";

const MarketStats = () => {
  return (
    <div className="w-full flex gap-4">
      <div className="justify-center border p-2  rounded-xl flex  w-[70%] bg-white">
        <div className="w-full flex flex-col ">
          <div className=" flex  p-2 border-b text-slate-700">
            <div className="font-bold  flex items-center">
              Market Statistics
            </div>
            <div className=""></div>
          </div>
          <div className="flex justify-center items-center">
            <DashboardBarChart />
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-white border rounded-xl h-full "></div>
    </div>
  );
};

export default MarketStats;
