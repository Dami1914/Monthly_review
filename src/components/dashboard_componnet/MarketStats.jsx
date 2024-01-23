import DashboardBarChart from "./charts/DashboardBarChart"


const MarketStats = () => {
  return (
    <div className="w-full">
        <div className="justify-center border p-2 rounded-xl flex flex-col w-full bg-white">
          <div className=" flex p-2 border-b text-slate-700">
            <div className="font-bold w-[20%] flex items-center">
              Market Statistics
            </div>
            <div className="w-[80%]"></div>
          </div>
          <div className="p-3">
            <DashboardBarChart/>
          </div>
        </div>
      </div>
  )
}

export default MarketStats