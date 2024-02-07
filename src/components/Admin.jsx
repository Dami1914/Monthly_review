import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MiniSideMenu from "./menu_component/MiniSideMenu";
import User from "./admin_components/user_component/User";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import Branch from "./admin_components/branch_component'/Branch";
import Market from "./admin_components/market_component/Market";
import CreateUser from "./admin_components/user_component/CreateUser";
import { Marketer } from "./admin_components/marketer_component/Marketer";

const Admin = () => {
  const miniSideMenuInfo = [
    { name: "Manage User", to: "user" },
    { name: "Manage Market", to: "market" },
    { name: "Manage Branch", to: "branch" },
    { name: "Manage Marketer", to: "marketer" },
  ];

  console.log(location.pathname.split("/").slice(1, 1));
  return (
    <div className="w-full flex h-full">
      <MiniSideMenu data={miniSideMenuInfo} />
      <div className="w-[85%] flex h-full overflow-x-hidden overflow-y-auto">
        <Routes>
          <Route index element={<Navigate to="user" />} />
          <Route path="user/*" element={<User />} />
          <Route path="market/*" element={<Market />} />
          <Route path="branch/*" element={<Branch />} />
          <Route path="marketer/*" element={<Marketer/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
