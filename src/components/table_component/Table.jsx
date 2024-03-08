import React from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'

const Table = ({tableData,operation}) => {
  return (
    <table style={{'--current-color-':"#1f1b24"}} className="w-full dark:bg-darkmode-1 dark:border-0 dark:text-darkmode-dark bg-white text-slate-600 text-sm">
        <thead className="border-b dark:border-b-slate-600 dark:border-darkmode-1">
        <tr>
            {tableData.map((ele)=>{
              return <TableHead key={ele} elem={ele}/>
            })}
            {
              operation?
               <th className="font-normal p-2">Operation</th>
               :""
            }
           
          </tr>
        </thead>
        <tbody>
            {tableData.map((ele,index)=>{
              return (
              <TableRow operation={operation} key={index} elem={ele}/>
              )
            })}
        </tbody>
    </table>
  )
}

export default Table