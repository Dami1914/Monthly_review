import React from 'react'

const TableHead = (props) => {
    const data = props.elem
  return (
      Object.keys(data).map((ele,index)=>{
        return <th key={index*1-2} className='text-slate-500 font-normal p-2'>{ele}</th>
      })
      
  )
}

export default TableHead