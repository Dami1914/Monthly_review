import MarketStats from "./dashboard_componnet/MarketStats";
import PerformanceTable from "./dashboard_componnet/PerformanceTable";
import Card from "./dashboard_componnet/cards/Card";




const Dashboard = () => {
  return (
    <div className="w-full overflow-y-scroll h-full flex gap-5 p-5 flex-col bg-slate-50">
      <div className=" flex gap-5 items-center w-full h-[20%]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <MarketStats/>
      <PerformanceTable/>
    </div>
  );
};

export default Dashboard;
