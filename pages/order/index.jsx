import Image from "next/image";

const Order = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_433px)] flex justify-center items-center flex-col p-10 min-w-[600px]">
        <div className="flex items-center flex-1 w-full max-h-28">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ORDER ID
                </th>
                <th scope="col" className="py-3 px-6">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 px-6">
                  ADDRESS
                </th>
                <th scope="col" className="py-3 px-6">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  63107f559...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Zehra İkizler
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Adana
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  13$
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full p-10 mt-8 bg-primary">
          <div className="relative flex flex-col">
            <Image
              src="/images/order/paid.png"
              alt="photo"
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Payment</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/images/order/bake.png"
              alt="photo"
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Preparing</span>
          </div>
          <div className="relative flex flex-col animate-pulse">
            <Image
              src="/images/order/bike.png"
              alt="photo"
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>On the way</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/images/order/delivered.png"
              alt="photo"
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
