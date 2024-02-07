import React, { useState } from "react";
import Table from "../../table_component/Table";
import { Navigate, Route,Routes } from "react-router-dom";
import CreateUser from "./CreateUser";

import MiniTopMenu from "../../menu_component/MiniTopMenu";
const User = () => {
  const [operation, setOperation] = useState(true);

  const tableData = [
    {
      "User ID": "001",
      FullName: "Damilola jibowu",
      Branch: "Mushin",
      Position: "IT",
      Contact: 9133909108,
      Email: "damilola.jibowu@gmail.com",
      Status: "Active",
    },
  ];
  return (
    <div className="w-full h-full ">
      <MiniTopMenu/>
      <Routes>
        <Route index element={<Navigate to='users' />}/>
        <Route path='users' element={<Table operation={operation} tableData={tableData}/>}/>
        <Route path='createuser' element={<CreateUser/>}/>
      </Routes> 
    </div>
  );
};

export default User;
