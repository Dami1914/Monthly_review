import React from "react";

const DashboardSwitcher = ({ data,handleClick,handleRef,index}) => {
  return (
    <div ref={(ele)=> handleRef.current[index]= ele} onClick={()=>handleClick(data.name)}  className="rounded-2xl border-inherit border cursor-pointer  flex items-center justify-center p-2">
      {data.name}
    </div>
  );
};

export default DashboardSwitcher;
