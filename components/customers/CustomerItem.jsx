import React from "react";
import Image from "next/image";

const CustomerItem = ({ imgSrc }) => {
  return (
    <div className="mt-5 mx-4">
      <div className="p-6 bg-secondary text-white rounded-[5px]">
        <p>
          Illum inventore soluta ea necessitatibus et rem eligendi natus,
          numquam, nesciunt reiciendis dolor ut quia repudiandae sapiente!
          Voluptates ipsam nulla error ullam?
        </p>
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold">Moana Michell</span>
          <span className="text-[15px]">magna aliqua</span>
        </div>
      </div>

      <div className="relative w-28 h-28 border-4 rounded-full border-primary mt-8 before:content[''] before:absolute before:top-1 flex justify-center before:bg-primary before:w-5 before:h-5 before:-translate-y-4 before:rotate-45">
        <Image
          src={imgSrc}
          alt="person"
          fill
          contain="true"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
