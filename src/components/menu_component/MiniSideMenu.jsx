import { NavLink } from "react-router-dom";

const MiniSideMenu = ({ data }) => {
  return (
    <div className="w-[15%] border-r bg-white">
      <ul className="w-full p-5 flex flex-col gap-3">
        {data.map((ele, index) => {
          return (
            <li
              key={index + 2 * 3}
              className="w-full p-1 relative font-bold text-slate-600"
            >
              <NavLink
                to={ele.to}
                className="peer cursor-pointer hover:text-green-600 hover:bg-slate-100"
              >
                {ele.name}
              </NavLink>
              <div className="absolute transition-all w-[5px] bg-green-600 peer-hover:-left-3 peer-hover:rounded-l-2xl peer-hover:rounded-r-none h-full rounded-r-2xl top-0 left-40"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MiniSideMenu;
