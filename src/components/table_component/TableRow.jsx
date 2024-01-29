import React from "react";
import { FaArrowAltCircleDown, FaChevronDown, FaCross, FaWindowClose } from "react-icons/fa";
import { PiTrendDownBold, PiTrendDownThin } from "react-icons/pi";

const TableRow = ({ elem, operation }) => {
  return (
    <tr className="font-bold hover:bg-green-50 hover:text-green-800">
      {Object.values(elem).map((ele, index) => {
        return Object.keys(elem).indexOf("Status") === index ? (
          <td
            className="text-center p-2"
            key={index + 1 * 2}
          >
            <div className="flex text-red-700 rounded bg-red-200 justify-center items-center gap-3">
              {ele}
              {
                !operation? <PiTrendDownBold/> : <FaWindowClose/>
              }
            </div>
          </td>
        ) : (
          <td className="text-center p-2" key={index + 1 * 2}>
            {ele}
          </td>
        );
      })}
      {operation ? (
        <td className="text-center p-2 flex items-center justify-center gap-3">
          <div className="bg-green-200 rounded cursor-pointer hover:bg-transparent text-green-800 px-3">
            Edit
          </div>
          <div className="bg-red-200 rounded cursor-pointer hover:bg-transparent text-red-800 px-3">
            Delete
          </div>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
};

export default TableRow;
