import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Search from "../ui/Search";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-50 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`md:static absolute top-0 left-0 md:w-auto md:h-auto w-full h-screen md:text-white text-black md:bg-transparent bg-white md:flex hidden  ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 md:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer uppercase">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer uppercase">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer uppercase">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer uppercase">
              <Link href="/reservation">Book Table</Link>
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
          <Link href="/auth/login">
            <FaUserAlt className="hover:text-primary transation-all" />
          </Link>
          <Link href="/card">
            <FaShoppingCart className="hover:text-primary transation-all" />
          </Link>
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
