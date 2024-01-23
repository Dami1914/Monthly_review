import { TableRow } from "./TableRow";
import { motion } from "framer-motion";

const Table = () => {
  return (
    <table
     className="w-full">
      <thead className="border-b">
        <tr className=" text-slate-500">
          <th className="font-normal p-2">MRKT ID</th>
          <th className="font-normal p-2">Market</th>
          <th className="font-normal p-2">Curr Month Trgt</th>
          <th className="font-normal p-2">Actual Daily RRT</th>
          <th className="font-normal p-2">Avrg Daily RRT</th>
          <th className="font-normal p-2">Actual Returns</th>
          <th className="font-normal p-2">MTD</th>
          <th className="font-normal p-2">Difference</th>
          <th className="font-normal p-2">Percentage</th>
          <th className="font-normal p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <TableRow/>
        <TableRow/>
      </tbody>
    </table>
  );
};

export default Table;
