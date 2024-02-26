import React from 'react'
import MiniSideMenu from './menu_component/MiniSideMenu'
import MiniTopMenu from './menu_component/MiniTopMenu'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loans from './loan_component/Loans'

const Loan = () => {
    const data = [
        {name:"Loans", to:'loans'}
    ]
  return (
    <div className='w-full flex h-full'>
        <MiniSideMenu data={data}/>
        <div className='w-full h-full'>
            <Routes>
                <Route index element={<Navigate to="loans"/>}/>
                <Route path="loans" element={<Loans/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Loan