import DashboardSwitcher from "./dashboard_componnet/buttons/DashboardSwitcher";
import { useEffect, useRef, useState } from "react";
import ManagementDashboard from "./dashboard_componnet/Management_component/ManagementDashboard";
import UserDashboard from "./dashboard_componnet/user_dashboard/UserDashboard";
import LoanDashboard from "./dashboard_componnet/Loan_dashboard/LoanDashboard";
import AnalyticsDashboard from "./dashboard_componnet/analytics_dashboard/AnalyticsDashboard";

const Dashboard = () => {
  const dashboarRef = useRef([]);
  const [activeDashboard,setActiveDashboard] = useState("User")
  const buttonRef = useRef([])
  const dashboards = [
    { name: "User", component: <UserDashboard />, },
    { name: "Loan", component: <LoanDashboard />,},
    { name: "Analytics", component: <AnalyticsDashboard />, },
    { name: "Management", component: <ManagementDashboard />,},
  ]

  function handleDashBoardNav(ele){
    setActiveDashboard(ele)
    console.log(ele === activeDashboard )
    buttonRef.current.forEach((elem)=>{
      if(ele === activeDashboard ){
        elem.classList.add("activeDashboardButton")
      }else{
        elem.classList.remove("activeDashboardButton")
      }
    })
  }
  useEffect(() => {
    console.log(activeDashboard)
    dashboarRef.current.forEach((ele)=>{
      if(ele.id === activeDashboard){
        ele.classList.add("activeDashboard")
      }else{
        ele.classList.remove("activeDashboard")
      }
    })
  },[activeDashboard]);
  return (
    <div className="w-full relative  overflow-hidden rounded-xl scrollbar-hide bg-lightmode-1 dark:bg-darkmode-2  overflow-y-scroll h-full ">
      <section className="w-full z-[2] gap-4 px-5 border-y border-t-0 p-2 flex h-[8%] backdrop-filter-0 backdrop-blur-xl top-0 m-0 sticky">
        {dashboards.map((ele, index) => {
          return <DashboardSwitcher handleRef={buttonRef} index={index} handleClick={handleDashBoardNav} key={`${ele}${index}`} data={ele} />;
        })}
      </section>
      {dashboards.map((ele, index) => {
        return (
          <div
            id={ele.name}
            ref={(ele) => (dashboarRef.current[index] = ele)}
            key={`${index}${ele}`}
            className="w-full h-[92%] opacity-0 absolute z-[1] dashboard translate-x-[90vw] p-5 flex gap-5  flex-col "
          >
            {ele.component}
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
