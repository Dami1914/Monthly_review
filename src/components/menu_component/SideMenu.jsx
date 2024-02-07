import { FaExchangeAlt, FaPaypal, FaServer, FaStackExchange, FaTerminal } from "react-icons/fa";
import { LuLayoutDashboard, LuPiggyBank, LuUser } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="bg-white w-[14%] h-full text-slate-600 ">
      <div className="w-full h-[10%] gap-3 border flex justify-center items-center">
        <div className="w-[40px] h-[40px] border rounded-[50%]"></div>
        <div className="font-bold">
            <div>Damilola Jibowu</div>
            <div className="text-sm font-medium ">IT DEPT</div>
        </div>
        <div></div>
      </div>
      <div className="w-full h-[90%] border py-5">
        <ul className="w-full"> 
          <li className="flex relative hover:bg-slate-50 px-5 h-[40px] transition-all  hover:text-green-600   w-full items-center cursor-pointer">
            <NavLink  to="dashboard" className="w-full peer h-full flex  gap-3 items-center">
                <div className="text-2xl"><LuLayoutDashboard /></div>
                <div className="font-bold">Dashboard</div>
            </NavLink>
            <div className="peer-hover:bg-green-600 transition-all  left-0  bg-transparent absolute w-[4px] h-[30px] rounded-r-md"></div>
          </li>
          <li className="flex relative hover:bg-slate-50 px-5 h-[40px] transition-all  hover:text-green-600   w-full items-center cursor-pointer">
            <NavLink to="admin" className="w-full peer h-full flex  gap-3 items-center">
                <div className="text-2xl"><LuUser /></div>
                <div className="font-bold">Admin</div>
            </NavLink>
            <div className="peer-hover:bg-green-600 transition-all  left-0  bg-transparent absolute w-[4px] h-[30px] rounded-r-md"></div>
          </li>
          <li className="flex relative hover:bg-slate-50 px-5 h-[40px] transition-all  hover:text-green-600   w-full items-center cursor-pointer">
            <NavLink to="operation" className="w-full peer h-full flex  gap-3 items-center">
                <div className="text-2xl"><FaExchangeAlt/></div>
                <div className="font-bold">Operation</div>
            </NavLink>
            <div className="peer-hover:bg-green-600 transition-all  left-0  bg-transparent absolute w-[4px] h-[30px] rounded-r-md"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
