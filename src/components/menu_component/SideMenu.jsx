import { FaExchangeAlt, FaPaypal, FaRegMoneyBillAlt, FaServer, FaSignOutAlt, FaStackExchange, FaTerminal } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LuLayoutDashboard, LuPiggyBank, LuUser } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-white w-[18%] h-full text-slate-600 ">
      <div className="w-full h-[10%] gap-3 bg-green-600 text-white   border-r flex justify-center items-center">
        <div className="w-[40px] drop-shadow-xl bg-white h-[40px] border rounded-[50%]"></div>
        <div className="font-bold flex drop-shadow-xl flex-col justify-center items-center">
            <div className="flex-shrink">Damilola Jibowu</div>
            <div className="text-sm font-medium ">IT DEPT</div>
        </div>
        <div></div>
      </div>
      <div className="w-full h-[90%] flex flex-col justify-between border-r py-5">
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
            <NavLink to="loan" className="w-full peer h-full flex  gap-3 items-center">
                <div className="text-2xl"><FaRegMoneyBillAlt/></div>
                <div className="font-bold">Loan</div>
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
        <div className="w-full items-center flex h-[20%] ">
            <div className="h-1/2 w-1/2 flex justify-center items-center text-2xl">
              <div className="w-1/2 border flex justify-center cursor-pointer transition-colors duration-300 hover:drop-shadow-md hover:text-green-600 p-2 rounded"><IoSettings/></div>
            </div>
            <div className="h-1/2 flex w-1/2 justify-center items-center text-2xl">
              <div onClick={()=>navigate('/login')} className="w-1/2 border flex justify-center p-2 rounded hover:text-green-600 cursor-pointer transition-colors duration-300 hover:drop-shadow-md"><FaSignOutAlt/></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
