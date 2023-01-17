import React from "react";
import Title from "../ui/Title";
import Image from "next/image";

const Products = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5 mb-10">
      <Title>Products</Title>
      <div className="flex items-center overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[600px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                TITLE
              </th>
              <th scope="col" className="py-3 px-6">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary hover:text-white transition-all">
              <td className="py-4 px-6 font-medium whitespace-nowrap flex justify-center">
                <Image
                  src="/images/f1.png"
                  alt="photo"
                  width={50}
                  height={50}
                />
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                23760...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                Good Pizza
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">$10</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap">
                <button className="btn-primary !bg-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
