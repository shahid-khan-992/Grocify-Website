import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShoeMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShoeMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "shadow-xl duration-200" : ""
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-10 h-[14vh] flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>ocify
        </Link>

        {/* MENU */}
        <ul className="md:flex items-center gap-x-10 hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* NAV ACTION */}
        <div className="flex items-center gap-x-2">
          {/* INPUT FIELD */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-9 h-9 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </div>

          <a href="#" className="text-zinc-800 text-2xl">
            <FaHeart />
          </a>

          <a href="#" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>
          <a
            href="#"
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>

        {/* MOBILE MENU */}
        <ul
          className={`flex flex-col items-center gap-x-12 p-10 md:hidden absolute gap-y-12 
                        bg-orange-500/15 backdrop-blur-lg rounded-lg top-30 -left-full 
                        transform -translate-x-1/2 duration-500 ${
                          showMenu ? "left-1/2" : ""
                        }`}
        >
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-9 h-9 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
