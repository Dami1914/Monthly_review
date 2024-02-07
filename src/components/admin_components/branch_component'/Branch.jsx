import React from "react";
import Table from "../../table_component/Table";
import MiniTopMenu from "../../menu_component/MiniTopMenu";
import { Navigate, Route, Routes } from "react-router-dom";
import CreateBranch from "./CreateBranch";

const Branch = () => {
  const operation = true
  const branchData = [
    {
      "ID": "001",
      Location: "Mushin",
      "Branch Contact": 9133909108,
      "Branch Address": "1, oliyide street, mushin lagos.",
      "Branch Manager": "Ifeanyi Ugwuanyi",
      "Manager Contact": 9133909108,
      "Total Staff": 20,
      Status: "Active"
    },
  ];
  return (
    <div className="w-full h-full ">
      <MiniTopMenu/>
      <Routes>
        <Route index element={<Navigate to="branchs"/>}/>
        <Route path="branchs" element={<Table operation={operation} tableData={branchData} />} />
        <Route path="createbranch" element={<CreateBranch/>}/>
      </Routes>
    </div>
  );
};

export default Branch;
