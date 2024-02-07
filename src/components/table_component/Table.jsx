import React from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'

const Table = ({tableData,operation}) => {
  return (
    <table className="w-full bg-white text-slate-600">
        <thead className="border-b">
        <tr>
            {tableData.map((ele)=>{
              return <TableHead key={ele} elem={ele}/>
            })}
            {
              operation?
               <th className="text-slate-500 font-normal p-2">Operation</th>
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