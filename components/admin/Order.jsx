import React from "react";
import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5 mb-10">
      <Title>Order</Title>
      <div className="flex items-center overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[600px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                PRODUCT
              </th>
              <th scope="col" className="py-3 px-6">
                CUSTOMER
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                PAYMENT
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary hover:text-white transition-all">
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                23780...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                Zehra İkizler
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$18</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">Cash</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                preparing
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                <button className="btn-primary !bg-success">Next Stage</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
