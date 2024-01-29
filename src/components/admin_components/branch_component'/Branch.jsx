import React from "react";
import Table from "../../table_component/Table";

const Branch = () => {
  const operation = true
  const branchData = [
    {
      "Branch ID": "001",
      Location: "Mushin",
      "Branch Address": "1, oliyide street, mushin lagos.",
      "Branch Manager": "Ifeanyi Ugwuanyi",
      "Branch Contact": 9133909108,
      "Total Staff": 20,
    },
  ];
  return (
    <div className="w-[85%] h-full ">
      <Table operation={operation} tableData={branchData} />
    </div>
  );
};

export default Branch;
