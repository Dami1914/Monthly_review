import Dashboard from "../components/Dashboard";
import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";

const Userpage = () => {
  return (
    <div className="w-full  h-full bg-slate-50">
      <TopMenu/>
      <div className="w-full h-[90%] flex">
        <SideMenu />
        <Dashboard />
      </div>
    </div>
  );
};

export default Userpage;
