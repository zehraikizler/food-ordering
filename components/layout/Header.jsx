import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Search from "../ui/Search";
import { useRouter } from "next/router";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const router = useRouter();

  // console.log(router.asPath);

  return (
    <div
      className={`h-[5.5rem] z-50 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden  ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 md:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer uppercase">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer uppercase">
              <a href="">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer uppercase">
              <a href="">About</a>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer uppercase">
              <a href="">Book Table</a>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute  top-8 right-1 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className="transition-all" />
            </button>
          )}
        </nav>
        <div className="flex items-center gap-x-4 text-white">
          <a href="">
            <FaUserAlt className="hover:text-primary transation-all" />
          </a>
          <a href="">
            <FaShoppingCart className="hover:text-primary transation-all" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transation-all" />
          </button>
          <a href="" className="md:inline-block hidden sm">
            <button className="btn-primary">Order Online</button>
          </a>
          <button
            className="md:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
