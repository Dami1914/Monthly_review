import React from "react";
import MiniTopMenu from "../menu_component/MiniTopMenu";
import { Navigate, Route, Routes } from "react-router-dom";

const Loans = () => {
  return (
    <div className="w-full flex h-full">
      <div className="w-[15%]">
        <MiniTopMenu />
      </div>
      <div>
        <Routes>
          <Route index element={<Navigate to="loans" />} />
        </Routes>
      </div>
    </div>
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
};

export default Loans;
