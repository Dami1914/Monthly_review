import React from "react";

const MiniSideMenu = () => {
  return (
    <ul className="w-full p-5 flex flex-col gap-3">
      <li className="w-full p-1 relative font-bold text-slate-600">
        <div className="peer cursor-pointer hover:text-green-600 hover:bg-slate-100">
          Manage User
        </div>
        <div className="absolute transition-all w-[5px] bg-green-600 peer-hover:-left-3 peer-hover:rounded-l-2xl peer-hover:rounded-r-none h-full rounded-r-2xl top-0 left-40"></div>
      </li>
      <li className="w-full p-1 relative font-bold text-slate-600">
        <div className="peer cursor-pointer hover:text-green-600 hover:bg-slate-100">
          Manage Markets
        </div>
        <div className="absolute transition-all w-[5px] bg-green-600 peer-hover:-left-3 peer-hover:rounded-l-2xl peer-hover:rounded-r-none h-full rounded-r-2xl top-0 left-40"></div>
      </li>
    </ul>
  );
};

export default MiniSideMenu;
