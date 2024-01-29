import { FaPlus } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MiniTopMenu = () => {
  const location = useLocation();
  console.log(location.pathname.split("/").length - 1);
  const valuesToCheckFor = ["dashboard", "operation"];
  return (
    <div className="w-full h-[10%] flex border backdrop-filter backdrop-blur-3xl  ">
      <div className="w-[70%] h-full flex gap-3 px-4 items-center">
        {location.pathname.split("/").map((ele, index) => {
          return (
            <NavLink
              key={`${ele} ${index}`}
              to={`/${location.pathname
                .split("/")
                .slice(1, index + 1)
                .join("/")}`}
              className="flex hover:text-slate-800 text-slate-500 cursor-pointer items-center gap-3"
            >
              <div>{ele}</div>
              <div>
                <FaChevronRight />
              </div>
            </NavLink>
          );
        })}
      </div>
      {valuesToCheckFor.some((ele) => {
        return location.pathname.split("/").includes(ele);
      }) ? (
        ""
      ) : (
        <div className="w-[30%] h-full px-10 flex justify-end items-center ">
          <div className="flex gap-3 w-full items-center justify-center">
            <div className="w-[30px] hover: border-slate-500 cursor-pointer text-slate-600 flex items-center justify-center h-[30px] border rounded-2xl">
              <FaPlus />
            </div>
            <div>
              Click to add {''}
              {location.pathname
                .split("/")
                .slice(location.pathname.split("/").length - 1)
                .join("/")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniTopMenu;
