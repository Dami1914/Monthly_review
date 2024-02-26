import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DashboardBarChart = () => {
  const data = [{ name: 'ilasa', amount: 200000 }, { name: 'ilasa', amount: 200000 }];
  
  const RoundedBar = (props) => {
    const { x, y, width, height } = props;
    const radius = 5; // Adjust the radius for the desired roundness

    return (
      <g>
        <path d={`M${x},${y + radius} L${x},${y + height - radius} Q${x},${y + height} ${x + radius},${y + height} L${x + width - radius},${y + height} Q${x + width},${y + height} ${x + width},${y + height - radius} L${x + width},${y + radius} Q${x + width},${y} ${x + width - radius},${y} L${x + radius},${y} Q${x},${y} ${x},${y + radius} Z`} fill={props.fill} />
      </g>
    );
  };

  return (
      <BarChart width={900} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar shape={<RoundedBar />} dataKey="amount" fill="rgb(22,163,74,1)" />
      </BarChart>
  );
};

export default DashboardBarChart;