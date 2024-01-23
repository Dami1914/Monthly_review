import { useEffect, useRef, useState } from 'react';
import Table from './table/Table'
import { FaExpand, FaFilter} from "react-icons/fa";
import { IoMdContract } from "react-icons/io";
const PerfomanceTable = () => {
  const perfomanceRef = useRef({})
  const [expand,setExpand] = useState(false)

  function handleExpand(){
    setExpand(prev=>!prev)
  }

useEffect(()=>{
  if(expand){
      perfomanceRef.current.classList.add('expand')
    }else{
      perfomanceRef.current.classList.remove('expand')
    }
})

  return (
    <div ref={perfomanceRef} className="w-full transition-all bg-white p-4 border rounded-xl">
        <div className="flex w-full border-b p-2 font-bold text-slate-700">
          <div className="w-[20%]">Perfomance Table</div>
          <div className='w-[60%] flex gap-10 '>
            <div className='flex gap-3 items-center bg-green-200 px-2 flex-grow-0 text-green-600 rounded-xl '>
              <div>Days Left :</div>
              <div>21</div>
            </div>
            <div className='flex bg-green-600 text-green-200 px-2 rounded-xl gap-3 items-center'>
              <div>Target :</div>
              <div>90,000,000</div>
            </div>
            <div className='flex items-center gap-3 bg-red-300 rounded-xl px-2 text-red-600'>
              <div>Current Month :</div>
              <div>March</div>
            </div>
          </div>
          <div className="w-[20%] items-center gap-5 flex justify-end ">
            <div className='bg-green-200 text-green-600 text-sm cursor-pointer gap-3 flex items-center rounded-xl p-1 px-2'>
              <div className=''>Filter & Sort</div>
              <div className=''>
                <FaFilter/>
              </div>
            </div>
            <div className='cursor-pointer relative'>
              <div  className='peer border border-slate-300 p-2 rounded-lg'>
                 {
                  expand? <IoMdContract className='text-lg' onClick={handleExpand}/>: <FaExpand onClick={handleExpand}/>
                 }
              </div>
              <div className='transition-all absolute peer-hover:text-slate-700 peer-hover:bg-white peer-hover:flex -top-20 -left-10 text-transparent p-2 rounded-xl drop-shadow-xl '>click to expand</div>
            </div>
          </div>
        </div>
        <Table/>
      </div>
  )
}

export default PerfomanceTable