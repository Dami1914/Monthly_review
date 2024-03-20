import DashboardSwitcher from "./dashboard_componnet/buttons/DashboardSwitcher";
import { useEffect, useRef, useState } from "react";
import ManagementDashboard from "./dashboard_componnet/Management_component/ManagementDashboard";
import UserDashboard from "./dashboard_componnet/user_dashboard/UserDashboard";
import LoanDashboard from "./dashboard_componnet/Loan_dashboard/LoanDashboard";
import AnalyticsDashboard from "./dashboard_componnet/analytics_dashboard/AnalyticsDashboard";
import DisplayMapComponents from "./DisplayMapComponents";

const Dashboard = () => {
  const dashboards = [
    { name: "User", component: <UserDashboard /> },
    { name: "Loan", component: <LoanDashboard /> },
    { name: "Analytics", component: <AnalyticsDashboard /> },
    { name: "Management", component: <ManagementDashboard /> },
  ];

  return <DisplayMapComponents componentData={dashboards} />;
};

export default Dashboard;
