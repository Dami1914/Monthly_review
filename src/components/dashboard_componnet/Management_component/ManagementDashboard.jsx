import React from "react";
import Statistics from "../Statistics";
import PerfomanceTable from "../PerformanceTable";

const ManagementDashboard = () => {
  return (
    <div className="w-full  h-full flex flex-col gap-3">
      <div className=" hover:drop-shadow-lg bg-white dark:border-slate-600 overflow-hidden dark:bg-darkmode-1  border flex gap-5 items-center flex-shrink-0 w-full text-red h-[30%]  rounded-xl">
        <div></div>
      </div>
      <Statistics />
      <PerfomanceTable />
    </div>
  );
};

export default ManagementDashboard;
