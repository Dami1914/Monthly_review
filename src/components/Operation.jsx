import React from "react";
import MiniSideMenu from "./menu_component/MiniSideMenu";
import Table from "./table_component/Table";
import * as XLSX from "xlsx";

const Operation = () => {
  const operation = true;
  const bulkUploadData = [
    {
      "Market ID": "",
      "Market Name": "",
      Marketer: "",
      Teller: "",
      Amount: "",
      Date: "",
      Condition: "",
      Narration: "",
    },
  ];

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
  
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true }); // Set raw: true
  
      console.log(jsonData); // Output the extracted data including non-numeric values
    };
  
    reader.readAsArrayBuffer(file);
}
  const operationMenuData = [{ name: "Update Markets", to: "updatemarket" }];
  return (
    <div className="w-full h-full flex">
      <MiniSideMenu data={operationMenuData} />
      <div className="w-[85%] h-full flex flex-col ">
        <div className="w-full h-[40%] font-bold text-slate-700 flex">
          <div className="w-[50%] flex gap-4 flex-col items-start justify-center relative border-r h-full">
            <div className="absolute top-5 left-5 font-bold text-slate-700">
              Upload Data
            </div>
            <form  className="w-full p-2 gap-5 flex flex-col justify-center items-center">
              <input onChange={handleFileUpload} accept='.xlsx, .xls' type="file" className="w-full flex  border rounded p-2" />
              <div className="w-full flex gap-4 justify-center">
                <button className="p-2 hover:bg-transparent bg-green-200 text-green-600  rounded ">Upload</button>
                <button className="p-2 hover:bg-transparent bg-green-200 text-green-600  rounded ">Post</button>
                <button className="p-2 hover:bg-transparent bg-red-200 text-red-800 rounded ">Cancel</button>
              </div>
            </form>
          </div>
          <div className="w-[50%] relative h-full flex justify-center items-center">
            <div className="absolute top-5 left-5 font-bold text-slate-700">
              Post Data
            </div>
            <form className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col p-3 justify-center gap-5   items-start">
                <input type="number" placeholder="Market ID" className="indent-4 outline-0 p-2 w-[60%] border h-[30px] rounded-lg" />
                <input type="number" placeholder="Amount" className="indent-4 p-2 outline-0 w-[60%] border h-[30px] rounded-lg" />
              </div>
              <div className="w-full flex gap-5 pl-3">
                <button className="py-1 px-3 hover:bg-transparent bg-green-200 text-green-600 rounded">Post</button>
                <button className="py-1 px-3 hover:bg-transparent bg-red-200 text-red-800 rounded">Cancel</button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full">
          <Table operation={operation} tableData={bulkUploadData} />
        </div>
      </div>
    </div>
  );
};

export default Operation;