import React from "react";
import Image from "next/image";
import Title from "../../components/ui/Title";

const Card = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between md:flex-row flex-col border-b md:border-none">
        <div className="min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
          <table className="w-full text-sm text-center text-gray-500 min-w-[600px]">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  PRODUCT
                </th>
                <th scope="col" className="py-3 px-6">
                  EXTRAS
                </th>
                <th scope="col" className="py-3 px-6">
                  PRICE
                </th>
                <th scope="col" className="py-3 px-6">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary border-gray-700 hover:bg-primary hover:text-white transition-all">
                <td className="py-4 px-6 font-medium whitespace-nowrap flex items-center justify-center gap-x-2">
                  <Image
                    src="/images/f1.png"
                    alt="photo"
                    width={50}
                    height={50}
                  />
                  <span>Good Pizza</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap">
                  <span>mayonez, acı sos, etçap</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap">$20</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary text-white md:w-auto w-full flex flex-col justify-center p-14">
          <Title addClass="md:text-start text-center">CARD TOTAL</Title>
          <div className="flex flex-col gap-y-2 mb-6 mt-12 md:text-start text-center">
            <span>
              <b>Subtotal:</b> $23
            </span>
            <span>
              <b>Discount:</b> $0.00
            </span>
            <span>
              <b>Total:</b> $23
            </span>
          </div>
          <div className="flex md:justify-start justify-center">
            <button className="btn-primary md:w-auto w-52">
              CHECKOUT NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
