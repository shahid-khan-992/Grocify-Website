import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-zinc-800">
      {/* Top row: NavLinks + Button */}
      <div className="max-w-[1200px] mx-auto py-10 px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Nav Links */}
          <nav className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a
              href="#"
              className="text-zinc-200 hover:text-orange-500 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-zinc-200 hover:text-orange-500 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-zinc-200 hover:text-orange-500 transition"
            >
              Services
            </a>
            <a
              href="#"
              className="text-zinc-200 hover:text-orange-500 transition"
            >
              Products
            </a>
            <a
              href="#"
              className="text-zinc-200 hover:text-orange-500 transition"
            >
              Contact
            </a>
          </nav>

          {/* Button */}
          <div>
            <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* ICONS */}
        <div className="flex gap-5 pt-6 mx-auto md:mx-0 w-fit">
          <BsInstagram className="text-orange-500 text-2xl hover:text-white"/>
          <BsFacebook className="text-orange-500 text-2xl hover:text-white"/>
          <BsTwitter className="text-orange-500 text-2xl hover:text-white"/>
          <FaPinterestP className="text-orange-500 text-2xl hover:text-white"/>
        </div>

        {/* Bottom row: Copyright */}
        <div className="mt-7  text-zinc-600 text-sm md:text-left text-center">
          © {new Date().getFullYear()} This Site Developed By Shahid Ayyub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
