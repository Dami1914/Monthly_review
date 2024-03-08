import React, { useEffect } from "react";
import { useRef } from "react";
import { FaArrowAltCircleDown, FaChevronDown, FaCross, FaWindowClose } from "react-icons/fa";
import { PiTrendDownBold, PiTrendDownThin } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import { GeneralStateData } from "../../context/generalStateContext";

const TableRow = ({ elem, operation }) => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const {currentLoanCustomer, setCurrentLoanCustomer} = GeneralStateData()

  function navigateToLoanDetails(event){
    const {children} = event.target
    console.log(event.target)
    if(pathname.includes('loan')){
      navigate('loandetails')
      setCurrentLoanCustomer(elem)
    }
    
  }

  const tableRowRef = useRef([]);
  useEffect(() => {
    tableRowRef.current.forEach((ele) => {
      if(ele.innerText.length > 15){
        ele.classList.add("tooltip");
      }
    });
  },[]);
  return (
    <tr onClick={(event)=>navigateToLoanDetails(event)} className="font-bold cursor-pointer dark:text-slate-400 dark:hover:bg-darkmode-2 dark:hover:text-slate-300 hover:bg-green-50 hover:text-green-800">
      {Object.values(elem).map((ele, index) => {
        return Object.keys(elem).indexOf("Status") === index ? (
          <td className="text-center p-2" key={index + 1 * 2}>
            <div className="flex text-red-700 rounded bg-red-200 justify-center items-center gap-3">
              {ele}
              {!operation ? <PiTrendDownBold /> : <FaWindowClose />}
            </div>
          </td>
        ) : (
          <td
            style={{"--tooltips":`"${ele}"`,position: "relative"}}
            ref={(ele) => (tableRowRef.current[index] = ele)}
            className="text-center p-2"
            key={index + 1 * 2}
          >
            {ele.length>19?ele.slice(0,13).concat('....'):ele}
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
