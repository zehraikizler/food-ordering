import React from "react";
import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="flex flex-col flex-1 py-8 px-2 lg:px-8">
      <Title>Password</Title>
      <div className="flex items-center overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[600px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                ADDRESS
              </th>
              <th scope="col" className="py-3 px-6">
                DATE
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary hover:text-white transition-all">
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                23760...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">Adana</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                21.06.2020
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$16</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                preparing
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary hover:text-white transition-all">
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                23760...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">Adana</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                21.06.2020
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$16</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                preparing
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary hover:text-white transition-all">
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                23760...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">Adana</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                21.06.2020
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$16</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                preparing
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary hover:text-white transition-all">
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                23760...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">Adana</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                21.06.2020
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$16</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                preparing
              </td>
            </tr>
            <tr className="bg-secondary border-gray-700 hover:bg-primary hover:text-white transition-all">
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                23760...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">Adana</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                21.06.2020
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$16</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                preparing
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
