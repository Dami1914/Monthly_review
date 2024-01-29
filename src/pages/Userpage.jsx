import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "../components/Admin";
import Dashboard from "../components/Dashboard";
import Operation from "../components/Operation";
import MiniTopMenu from "../components/menu_component/MiniTopMenu";
import SideMenu from "../components/menu_component/SideMenu";
import TopMenu from "../components/menu_component/TopMenu";


const Userpage = () => {
  return (
    <div className="w-full  h-full bg-slate-50">
      <TopMenu/>
      <div className="w-full h-[90%] flex">
          <SideMenu/>               
        <div className="w-[85%] flex flex-col">
          <MiniTopMenu/>
        <Routes>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard/*" element={<Dashboard />} />
            <Route path="admin/*" element={<Admin />} />
            <Route path="operation/*" element={<Operation/>}/>
          </Routes>
        </div>                                                                                                                                                  
      </div>
    </div>
  );
};

export default Userpage;
