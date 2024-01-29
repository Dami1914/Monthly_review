import React from 'react'
import Table from '../../table_component/Table'
const Market = () => {
  const operation = true
  const marketData = [
    {
      "Market ID":"001",
      "Name": "Oshodi",
      "Head Marketer": "Ego Ugwuanyi",
      "Total Customer": 200,
      "Contact": 913309108,
      "Control Branch": "Mushin",
      "Branch Head":"Halimat Oyenusi",
      "Branch Contact": 9125943429
    }
  ]
  return (
    <div className='w-[85%] h-full '>
      <Table operation={operation} tableData={marketData} />
    </div>
  )
}

export default Market