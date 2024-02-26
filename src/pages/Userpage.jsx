import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Admin from "../components/Admin";
import Dashboard from "../components/Dashboard";
import Operation from "../components/Operation";
import SideMenu from "../components/menu_component/SideMenu";
import TopMenu from "../components/menu_component/TopMenu";
import Loan from "../components/Loan";
import MiniTopMenu from "../components/menu_component/MiniTopMenu";

const Userpage = () => {
  const location = useLocation();

  return (
    <div className="w-full  h-full bg-slate-100 text-sm">
      <TopMenu />
      <div className="w-full h-[90%] flex gap-3 ">
        <SideMenu />
        <div className="w-[85%] drop-shadow-xl bg-slate-50 h-full flex flex-col rounded-xl overflow-hidden">
          {location.pathname.split("/").includes("dashboard") ? (
            ""
          ) : (
            <div className="h-[10%]">
              <MiniTopMenu />
            </div>
          )}
          <div className="w-full h-full">
            <Routes>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard/*" element={<Dashboard />} />
              <Route path="admin/*" element={<Admin />} />
              <Route path="loan/*" element={<Loan />} />
              <Route path="operation/*" element={<Operation />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userpage;
