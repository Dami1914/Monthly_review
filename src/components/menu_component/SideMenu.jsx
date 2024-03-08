import { FaExchangeAlt, FaRegMoneyBillAlt, FaSignOutAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { LuLayoutDashboard, LuPiggyBank, LuUser } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HandleLayoutDesign } from "../../context/layoutDesignContext";
const SideMenu = () => {
  const navigate = useNavigate();
  const {mode} = HandleLayoutDesign()
  return (
    <div style={{'--current-color':mode?"#121212":"#F1F5F9"}} className="bg-white overflow-hidden  dark:bg-darkmode-2 w-[18%] h-full  ">
      <div className="w-full h-[15%] border-r transition-color cubic-bezier(0.99, 1.56, 0.64, 1) duration-75 dark:border-0 flex justify-center items-center p-2">
        <div className="w-full  h-[100%] dark:border-slate-600 border-y  gap-3    flex  items-center">
          <div className="w-[40px] drop-shadow-xl bg-white h-[40px] border rounded-[50%]"></div>
          <div className="font-bold   flex drop-shadow-xl flex-col justify-center items-center">
            <div className="flex-shrink">Damilola Jibowu</div>
            <div className="text-sm font-medium ">IT DEPT</div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-full h-[85%] flex flex-col dark:border-0 justify-between border-r py-5">
        <ul className="w-full flex flex-col gap-3">
          <li className="flex relative dark:hover:bg-darkmode-1 hover:bg-slate-50  h-[40px]   hover:text-green-600   w-full items-center cursor-pointer">
            <NavLink
              to="dashboard"
              className="w-full peer h-full flex px-5  gap-3 items-center"
            >
              <div className="text-2xl">
                <LuLayoutDashboard />
              </div>
              <div className="font-bold">Dashboard</div>
            </NavLink>
            <div className="peer-hover:bg-green-600   left-0  bg-transparent absolute w-[4px] h-[30px] rounded-r-md"></div>
          </li>
          <li className="flex relative dark:hover:bg-darkmode-1 hover:bg-slate-50 h-[40px]   hover:text-green-600   w-full items-center cursor-pointer">
            <NavLink
              to="admin"
              className="w-full peer h-full flex px-5  gap-3 items-center"
            >
              <div className="text-2xl">
                <LuUser />
              </div>
              <div className="font-bold">Admin</div>
            </NavLink>
            <div className="peer-hover:bg-green-600   left-0  bg-transparent absolute w-[4px] h-[30px] rounded-r-md"></div>
          </li>
          <li className="flex relative dark:hover:bg-darkmode-1 hover:bg-slate-50  h-[40px]   hover:text-green-600   w-full items-center cursor-pointer">
            <NavLink
              to="loan"
              className="w-full px-5 peer h-full flex  gap-3 items-center"
            >
              <div className="text-2xl">
                <FaRegMoneyBillAlt />
              </div>
              <div className="font-bold">Loan</div>
            </NavLink>
            <div className="peer-hover:bg-green-600  left-0  bg-transparent absolute w-[4px] h-[30px] rounded-r-md"></div>
          </li>
          <li className="flex relative dark:hover:bg-darkmode-1 hover:bg-slate-50  h-[40px]   hover:text-green-600   w-full items-center cursor-pointer">
            <NavLink
              to="operation"
              className="w-full peer px-5 h-full flex  gap-3 items-center"
            >
              <div className="text-2xl">
                <FaMoneyBillTransfer />
              </div>
              <div className="font-bold">Operation</div>
            </NavLink>
            <div className="peer-hover:bg-green-600  left-0  bg-transparent absolute w-[4px] h-[30px] rounded-r-md"></div>
          </li>
          <li className="flex relative dark:hover:bg-darkmode-1 hover:bg-slate-50  h-[40px]   hover:text-green-600   w-full items-center cursor-pointer">
            <NavLink
              to="settings"
              className="w-full peer h-full px-5 flex  gap-3 items-center"
            >
              <div className="text-2xl">
                <IoSettings />
              </div>
              <div className="font-bold">Settings</div>
            </NavLink>
            <div className="peer-hover:bg-green-600   left-0  bg-transparent absolute w-[4px] h-[30px] rounded-r-md"></div>
          </li>
        </ul>
        <div className="w-full items-center flex flex-col h-[20%] ">
          <div className="h-1/2  flex w-full justify-center items-center text-2xl">
            <div
              onClick={() => navigate("/login")}
              className="border w-1/2 dark:border-slate-600 flex justify-center text-sm gap-3 p-2 items-center rounded hover:text-green-600 cursor-pointer  duration-300 hover:drop-shadow-md"
            >
              <FaSignOutAlt /> <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
