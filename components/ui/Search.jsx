import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-black after:absolute after:top-0 after:left-0 after:opacity-60  grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 w-[375px] md:w-[600px] h-[500px] bg-white px-5 md:px-10 py-10 border-2 rounded-3xl">
            <Title addClass="text-[40px] text-center">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="border w-full my-10 px-5 py-2 rounded-xl"
            />
            <ul>
              <li className="flex items-center justify-between px-3 py-2 hover:bg-primary hover:rounded-lg border-b rounded transition-all">
                <div className="relative flex">
                  <Image src="/images/f1.png" alt="" width={56} height={56} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className="flex items-center justify-between px-3 py-2 hover:bg-primary hover:rounded-lg border-b rounded transition-all">
                <div className="relative flex">
                  <Image src="/images/f2.png" alt="" width={56} height={56} />
                </div>
                <span className="font-bold">Delicious Pizza</span>
                <span className="font-bold">$18</span>
              </li>
              <li className="flex items-center justify-between px-3 py-2 hover:bg-primary hover:rounded-lg border-b rounded transition-all">
                <div className="relative flex">
                  <Image src="/images/f3.png" alt="" width={56} height={56} />
                </div>
                <span className="font-bold">Perfect Pizza</span>
                <span className="font-bold">$6</span>
              </li>
            </ul>
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsSearchModal(false)}
            >
              <GiCancel
                size={25}
                className="transition-all hover:text-gray-500"
              />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
