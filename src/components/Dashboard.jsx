import { FaSimCard } from "react-icons/fa";
import MarketStats from "./dashboard_componnet/MarketStats";
import PerformanceTable from "./dashboard_componnet/PerformanceTable";
import Card from "./dashboard_componnet/cards/Card";
import SimCard from "./dashboard_componnet/icons/SimCard";
import DashBoardIllust from "../assets/DashBoardIllust";


const Dashboard = () => {
  return (
    <div className="w-full overflow-y-scroll h-full flex gap-5 p-5 flex-col bg-slate-50">
      <div className="border flex gap-5 items-center flex-shrink-0 w-full text-red h-[30%] bg-white rounded-xl">
        <div className="w-full flex-shrink overflow-hidden h-full flex justify-end items-center">
          <DashBoardIllust />
        </div>
      </div>
      <MarketStats />
      <PerformanceTable />
    </div>
  );
};

export default Dashboard;
