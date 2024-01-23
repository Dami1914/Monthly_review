
import { FaArrowDown } from "react-icons/fa";

export const TableRow = () => {
  return (
    <tr className="text-slate-800 hover:text-green-600 font-bold cursor-pointer rounded-xl overflow-hidden hover:bg-green-100">
          <td className="text-center p-2">001</td>
          <td className="text-center p-2">Ilasamaja</td>
          <td className="text-center p-2">1,000,000</td>
          <td className="text-center p-2">200,000</td>
          <td className="text-center p-2">150,000</td>
          <td className="text-center p-2">150,000</td>
          <td className="text-center p-2">150,000</td>
          <td className="text-center p-2">-800,000</td>
          <td className="text-center p-2">60%</td>
          <td className="text-center p-2">
            <div className="bg-red-400 px-2 text-red-800 flex items-center justify-around rounded-xl">
              <div>Poor</div>
              <div><FaArrowDown/></div>
            </div>
          </td>
        </tr>
  )
}
