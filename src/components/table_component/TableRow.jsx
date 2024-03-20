import React, { useEffect } from "react";
import { useRef } from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import {
  FaArrowAltCircleDown,
  FaChevronDown,
  FaCross,
  FaWindowClose,
} from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { PiTrendDownBold, PiTrendDownThin } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import { GeneralStateData } from "../../context/generalStateContext";
import { HandleLayoutDesign } from "../../context/layoutDesignContext";
import { FcCancel } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdOutlineTrendingFlat } from "react-icons/md";

const TableRow = ({ elem, operation}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mode } = HandleLayoutDesign();

  const { currentLoanCustomer, setCurrentLoanCustomer } = GeneralStateData();
  const rowRef = useRef([]);
  const tableRowRef = useRef({});

  function navigateToLoanDetails(event) {
    const { children } = event.target;
    console.log(event.target);
    if (pathname.includes("loan")) {
      navigate("loandetails");
      setCurrentLoanCustomer(elem);
    }
  }

  useEffect(() => {
    rowRef.current.forEach((ele) => {
      if (ele.innerText.length > 15) {
        ele.classList.add("tooltip");
      }
    });
    
  }, []);
   
  return (
    <tr
      style={{ "--current-row-color": !mode ? "#F1F5F9" : "#121212" }}
      id="row"
      className="font-bold bg-white cursor-pointer dark:text-slate-400 dark:hover:bg-darkmode-2 dark:hover:text-slate-300 hover:bg-green-50 hover:text-green-800"
    >
      {Object.values(elem).map((ele, index) => {
        return Object.keys(elem).indexOf("Status") === index ? (
          <td className="text-center  p-2"  key={index + 1 * 2}>
            <div className="flex rounded justify-center text-xl ">
              {!operation ? (
                ele ? (
                  <div className="text-green-600"><FiTrendingUp /></div>
                ) : (
                  <div className="text-red-600"><PiTrendDownBold /></div>
                )
              ) : ele ? (
                <div className="text-green-600">
                  <IoCheckmarkDone />
                </div>
              ) : (
                <FcCancel />
              )}
            </div>
          </td>
        ) : (
          <td
            style={{ "--tooltips": `"${ele}"`, position: "relative" }}
            ref={(ele) => (rowRef.current[index] = ele)}
            className="text-center p-2"
            key={index + 1 * 2}
          >
            {ele.length > 19 ? ele.slice(0, 13).concat("....") : ele}
          </td>
        );
      })}
      {operation ? (
        <td className="text-center p-2 flex gap-2  justify-center">
          <div className=" rounded flex items-center text-md cursor-pointer hover:bg-transparent text-green-600 px-3">
            <div onClick={(event) => console.log("hello world")} className="">
              <FiEdit />
            </div>
          </div>
          <div className="text-red-700 rounded  text-xl cursor-pointer hover:bg-transparent  px-3">
            <div onClick={(event) => console.log("hello world")}>
              <MdOutlineDeleteForever />
            </div>
          </div>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
};

export default TableRow;
